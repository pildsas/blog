import * as helpers from "./helpers";

const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

export function ToggleFollow(target) {
   this.prepareFetch = () => {
      this.profile_id = document.querySelector(".box__main-content").getAttribute("profile");
      this.fetch_body = new FormData();
      this.fetch_body.append("id", this.profile_id);

      if (target.classList.contains("add__follower")) {
         this.url = Routing.generate("add_following");
      } else if (target.classList.contains("remove__follower")) {
         this.url = Routing.generate("remove_following");
      }
   };

   this.fetchData = () => {
      this.promise = fetch(this.url, {
         method: "POST",
         body: this.fetch_body,
         headers: {
            "X-Requested-With": "XMLHttpRequest",
         },
      })
         .then((res) => {
            return res.json();
         })
         .then((res) => {
            return res;
         });
      return this.promise;
   };

   this.render = () => {
      if (target.classList.contains("add__follower")) {
         target.classList.remove("add__follower");
         target.classList.add("remove__follower");
         target.innerHTML = "Unfollow";
      } else if (target.classList.contains("remove__follower")) {
         target.classList.remove("remove__follower");
         target.classList.add("add__follower");
         target.innerHTML = "Follow";
      }

      document.querySelector(".followers__counter").innerHTML = this.data.followers_count;
   };

   this.init = async () => {
      this.prepareFetch();
      this.data = await this.fetchData();
      this.render();
   };

   this.init();
}

// export function getSubscribtions(data) {
//    let url = Routing.generate("get_subscribtions");
//    fetch(url, {
//       method: "POST",
//       body: data,
//       headers: {
//          "X-Requested-With": "XMLHttpRequest",
//       },
//    })
//       .then((res) => {
//          return res.json();
//       })
//       .then((res) => {
//          console.log(res);
//          let element = subscribtions.getSubscribtions(res);
//          subscribtions.replaceDOM(element);
//       });
// }
