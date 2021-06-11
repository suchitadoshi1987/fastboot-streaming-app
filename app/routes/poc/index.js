import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

// Fake api that resolves after 2 seconds.
function getFakeData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, foo: "Hello Ember!" });

    });
  });
  // return Promise.resolve();
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default class PocIndexRoute extends Route {
  @service fastboot;
  id = 123;
  async model() {
    let shoebox = this.fastboot.shoebox;
    let isFastBoot = this.fastboot.isFastBoot;

    if (isFastBoot) {
      return getFakeData(this.id).then(async (data) => {
        await wait(2000);
        // Stream the data here
        shoebox.stream(data.id, JSON.stringify(data));
        await wait(4000);
        shoebox.stream('ss', JSON.stringify({ foo: "bar" } ));
        return data;
      });
    }

    return shoebox && shoebox.retrieve(this.id);
  }
}
