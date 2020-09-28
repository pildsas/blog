import * as helpers from "./helpers";
import * as accordion from "./components/accordion";
import * as pagination from "./components/pagination";
import * as likes from "./likes";
import * as post from "./post_controller";
import * as postDOM from "./editDOM/_post";
import * as responseListModal from "./components/modals/_response_list";
import * as commentsModal from "./components/modals/_comments_list";
import * as createPostModal from "./components/modals/_create_post";
import * as createFolderModal from "./components/modals/_create_folder";
import * as editPostModal from "./components/modals/_edit_post";
import * as dropdown from "./components/dropdown";
import * as deletePostModal from "./components/modals/_delete_post";
import * as folder from "./folder";
import * as form_post from "./form_post";
import * as tags from "./components/tags";
import * as tagsDOM from "./editDOM/_tag";
import * as editCommentModal from "./components/modals/_edit_comment";
import * as deleteCommentModal from "./components/modals/_delete_comment";
import * as comments from "./components/comments";
import * as taggedPost from "./components/modals/_tagged_post";

import "regenerator-runtime/runtime";
const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

function IndexPage() {
   const self = this;

   self.colors = {
      item_overlay: {
         listResponse: "rgba(84, 160, 255, 0.4)",
         listResponseSecondary: "rgba(84, 160, 255, 0.4)",
         commentsModal: "rgba(0, 168, 255, 0.3)",
         commentsModalSecondary: "rgba(0, 168, 255, 0.3)",
         dropdown: "rgba(34, 47, 62, 0.5)",
         dropdownSecondary: "rgba(0, 168, 255, 0.3)",
         deleteCommentModal: "rgba(232, 65, 24, 0.4)",
         deleteCommentModalSecondary: "rgba(232, 65, 24, 0.4)",
         deletePostModal: "rgba(232, 65, 24, 0.4)",
         deletePostModalSecondary: "rgba(232, 65, 24, 0.4)",
         editPostModal: "rgba(0, 210, 211, 0.3)",
         editPostModalSecondary: "rgba(0, 210, 211, 0.3)",
         editCommentModal: "rgba(0, 168, 255, 0.3)",
         editCommentModalSecondary: "rgba(232, 65, 24, 0.4)",
      },
      secondary_overlay: {
         listResponseSecondary: "rgba(0, 0, 0, 0.3)",
         deleteCommentModal: "rgba(0, 0, 0, 0.3)",
         editCommentModal: "rgba(0, 0, 0, 0.3)",
         editCommentModalSecondary: "rgba(0, 0, 0, 0.3)",
         commentsModalSecondary: "rgba(0, 0, 0, 0.3)",
         createFolderModalSecondary: "rgba(0, 0, 0, 0.3)",
         deletePostModalSecondary: "rgba(0, 0, 0, 0.3)",
         editPostModalSecondary: "rgba(0, 0, 0, 0.3)",
      },
   };

   /**
    * GET USER DATA
    */
   this.getProfileData = async () => {
      return fetch(Routing.generate(self.routes.get_user_data), {
         method: "GET",
         // body: this.data,
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
   };

   /**
    * ROUTES
    */
   this.routes = {
      get_profile: "get_profile",
      update_profile: "update_profile",
      get_followers: "get_followers",
      get_following: "get_following",
      get_folders: "get_folders",
      get_posts: "get_posts",
      get_posts_all: "get_posts_all",
      get_user_data: "get_user_data",
      get_tags: "get_tags",
      get_follow: "get_follow",
   };

   /**
    * DEFAULT PAGINATION SETTINGS
    */
   this.pagination_data = {
      folders_page: 1,
      folders_sort: "created",
      folder: null,
      folders_pagination_container: "folders__paginator",
      posts_page: 1,
      posts_sort: "desc",
      posts_pagination_container: "posts__paginator",
      tags_page: 1,
      tags_sort: "popular",
      tag: null,
      tags_pagination_container: "tags__paginator",
      follow_page: 1,
      follow_sort: "desc",
      follow_pagination_container: "follow__paginator",
      tag_modal_page: 1,
      tag_modal_sort: "desc",
      tag_modal_pagination_container: "tag__paginator",
      tag_modal_tag: null,
   };

   /**
    * EVENT LISTENERS
    */
   this.addEv = {
      followToggler: () => {
         document.querySelector(".btn__follow").addEventListener("click", (e) => {
            if (this.profile_data.logged) {
               follow.ToggleFollow(e.target);
            } else {
               window.location.href = Routing.generate("login");
            }
         });
      },
      selectTag: (container) => {
         let tags_tag = document.querySelector(container).querySelectorAll(".tags__tag");

         tags_tag.forEach((tag) => {
            tag.addEventListener("click", (e) => {
               self.pagination_data.tag_modal_tag = e.target.getAttribute("tag");

               new taggedPost.TaggedPost({
                  id: "box__modal",
                  target: e.target,
                  style_class: "style-class__tagged-post",
                  renderpaginated: () => {
                     return this.taggedPostPagination();
                  },
                  rendersort: () => {
                     new dropdown.Dropdown({
                        id: "sort__tag",
                        attr: "sort",
                        default_attr: ["sort", "desc"],
                        data: [
                           ["Newest", "desc"],
                           ["Most liked", "liked"],
                           ["Most commented", "commented"],
                        ],
                        placeholder: "Sort by",
                        style: {
                           width: "200px",
                        },
                        cb: function (elem) {
                           self.pagination_data.tag_modal_sort = elem.getAttribute("sort");
                           self.taggedPostPagination();
                        },
                     });
                  },
               });
            });
         });
      },
      listResponse: (container) => {
         let tooltip_toggle = document.querySelector(container).querySelectorAll(".trigger__modal");
         tooltip_toggle.forEach((span) => {
            span.addEventListener("click", (e) => {
               new responseListModal.responseList({
                  id: "box__modal",
                  target: e.target,
                  attr: {
                     classname: "box__post",
                     attr: "post",
                  },
                  url: "post_likes",
                  style_class: "style-class__response-list",
                  item_overlay: "overlay__post",
                  item_overlay_bg: self.colors.item_overlay.listResponse,
               });
            });
         });
      },
      listResponseSecondary: (container) => {
         let tooltip_toggle = document.querySelector(container).querySelectorAll(".trigger__modal");
         tooltip_toggle.forEach((span) => {
            span.addEventListener("click", (e) => {
               new responseListModal.responseList({
                  id: "box__modal-secondary",
                  modal_overlay: "overlay__response-list",
                  secondary_overlay: ".overlay__modal-item",
                  secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
                  item_overlay: "overlay__post",
                  item_overlay_bg: self.colors.item_overlay.listResponseSecondary,
                  target: e.target,
                  attr: {
                     classname: "box__post",
                     attr: "post",
                  },
                  url: "post_likes",
                  style_class: "style-class__response-list",
               });
            });
         });
      },
      openComments: (container) => {
         let comments_toggle = document.querySelector(container).querySelectorAll(".trigger__comments-modal");
         comments_toggle.forEach((span) => {
            span.addEventListener("click", (e) => {
               new commentsModal.CommentsList({
                  id: "box__modal",
                  target: e.target,
                  attr: {
                     classname: "box__post",
                     attr: "post",
                  },
                  url: "get_comments",
                  style_class: "style-class__comments-list",
                  item_overlay: "overlay__post",
                  item_overlay_bg: self.colors.item_overlay.commentsModal,
                  dropdown_container: "container__dd-comments",
                  dropdown_trigger: "trigger__dd-comments",
                  getUser: () => {
                     return this.profile_data;
                  },
                  dropdown: (comment) => {
                     if (comment.commented_post.author.id == this.profile_data.id) {
                        if (comment.comment_author.id == this.profile_data.id) {
                           var data = [
                              ["Edit", "far fa-edit", "dd__edit"],
                              ["Delete", "fas fa-trash", "dd__delete"],
                           ];
                        } else {
                           var data = [["Delete", "fas fa-trash", "dd__delete"]];
                        }
                     } else if (comment.comment_author.id == this.profile_data.id) {
                        var data = [
                           ["Edit", "far fa-edit", "dd__edit"],
                           ["Delete", "fas fa-trash", "dd__delete"],
                        ];
                     }
                     if (
                        comment.commented_post.author.id != this.profile_data.id &&
                        comment.comment_author.id != this.profile_data.id
                     )
                        return;

                     new dropdown.Icon({
                        id: `container__dd-comments-${comment.id}`,
                        trigger: `#trigger__dd-comments-${comment.id}`,
                        data: data,
                        item_overlay: "overlay__comment",
                        item_overlay_bg: self.colors.item_overlay.dropdownSecondary,
                        cb: async (target) => {
                           /**
                            * MODAL DELETE
                            */
                           if (target.classList.contains("dd__delete")) {
                              new deleteCommentModal.DeleteComment({
                                 id: "box__modal-secondary",
                                 target: target,
                                 style_class: "style-class__comment-delete",
                                 secondary_overlay: ".overlay__modal-item",
                                 secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModal,
                                 item_overlay: "overlay__comment",
                                 item_overlay_bg: self.colors.item_overlay.deleteCommentModal,
                                 onsubmit: async () => {},
                              });
                              /**
                               * MODAL EDIT
                               */
                           } else if (target.classList.contains("dd__edit")) {
                              new editCommentModal.EditComment({
                                 id: "box__modal-secondary",
                                 target: target,
                                 style_class: "style-class__comment-edit",
                                 secondary_overlay: ".overlay__modal-item",
                                 secondary_overlay_bg: self.colors.secondary_overlay.editCommentModal,
                                 item_overlay: "overlay__comment",
                                 item_overlay_bg: self.colors.item_overlay.editCommentModal,
                                 onsubmit: async (response) => {
                                    comments.EditComment(response);
                                 },
                              });
                           }
                        },
                     });
                  },
                  onclickLikes: (target) => {
                     /**
                      * TOGGLE LIKES
                      */
                     new likes.UpdateLikes({
                        target: target,
                        id: { id: helpers.getFirstElementByClassName(target, "box__comment").getAttribute("comment") },
                        url: {
                           like: "comment_like",
                           dislike: "comment_dislike",
                           unlike: "comment_unlike",
                           undislike: "comment_undislike",
                        },
                     });
                  },
                  onclickCount: (target) => {
                     new responseListModal.responseList({
                        id: "box__modal-secondary",
                        target: target,
                        attr: {
                           classname: "box__comment",
                           attr: "comment",
                        },
                        url: "comment_likes",
                        style_class: "style-class__response-list",
                        secondary_overlay: ".overlay__modal-item",
                        secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
                        item_overlay: "overlay__comment",
                        item_overlay_bg: self.colors.item_overlay.listResponseSecondary,
                     });
                  },
               });
            });
         });
      },
      openCommentsSecondary: (container) => {
         let comments_toggle = document.querySelector(container).querySelectorAll(".trigger__comments-modal");
         comments_toggle.forEach((span) => {
            span.addEventListener("click", (e) => {
               new commentsModal.CommentsList({
                  id: "box__modal-secondary",
                  target: e.target,
                  attr: {
                     classname: "box__post",
                     attr: "post",
                  },
                  url: "get_comments",
                  style_class: "style-class__comments-list",
                  modal_overlay: "overlay__comments-list",
                  secondary_overlay: ".overlay__modal-item",
                  secondary_overlay_bg: self.colors.secondary_overlay.commentsModalSecondary,
                  item_overlay: "overlay__post",
                  item_overlay_bg: self.colors.item_overlay.commentsModalSecondary,
                  dropdown_container: "container__dd-comments-modal",
                  dropdown_trigger: "trigger__dd-comments-modal",
                  getUser: () => {
                     return this.profile_data;
                  },
                  dropdown: (comment) => {
                     if (comment.commented_post.author.id == this.profile_data.id) {
                        if (comment.comment_author.id == this.profile_data.id) {
                           var data = [
                              ["Edit", "far fa-edit", "dd__edit"],
                              ["Delete", "fas fa-trash", "dd__delete"],
                           ];
                        } else {
                           var data = [["Delete", "fas fa-trash", "dd__delete"]];
                        }
                     } else if (comment.comment_author.id == this.profile_data.id) {
                        var data = [
                           ["Edit", "far fa-edit", "dd__edit"],
                           ["Delete", "fas fa-trash", "dd__delete"],
                        ];
                     }
                     if (
                        comment.commented_post.author.id != this.profile_data.id &&
                        comment.comment_author.id != this.profile_data.id
                     )
                        return;

                     new dropdown.Icon({
                        id: `container__dd-comments-modal-${comment.id}`,
                        trigger: `#trigger__dd-comments-modal-${comment.id}`,
                        data: data,
                        item_overlay: "overlay__comment",
                        item_overlay_bg: self.colors.item_overlay.dropdownSecondary,
                        cb: async (target) => {
                           /**
                            * MODAL DELETE
                            */
                           if (target.classList.contains("dd__delete")) {
                              new deleteCommentModal.DeleteComment({
                                 id: "box__modal-third",
                                 target: target,
                                 style_class: "style-class__comment-delete",
                                 secondary_overlay: "#overlay__comments-list",
                                 secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModalSecondary,
                                 item_overlay: "overlay__comment",
                                 item_overlay_bg: self.colors.item_overlay.deleteCommentModalSecondary,
                                 onsubmit: async () => {},
                              });
                              /**
                               * MODAL EDIT
                               */
                           } else if (target.classList.contains("dd__edit")) {
                              new editCommentModal.EditComment({
                                 id: "box__modal-third",
                                 target: target,
                                 style_class: "style-class__comment-edit",
                                 secondary_overlay: "#overlay__comments-list",
                                 secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModalSecondary,
                                 item_overlay: "overlay__comment",
                                 item_overlay_bg: self.colors.item_overlay.editCommentModalSecondary,
                                 onsubmit: async () => {},
                              });
                           }
                        },
                     });
                  },
                  onclickLikes: (target) => {
                     /**
                      * TOGGLE LIKES
                      */
                     new likes.UpdateLikes({
                        target: target,
                        id: { id: helpers.getFirstElementByClassName(target, "box__comment").getAttribute("comment") },
                        url: {
                           like: "comment_like",
                           dislike: "comment_dislike",
                           unlike: "comment_unlike",
                           undislike: "comment_undislike",
                        },
                     });
                  },
                  onclickCount: (target) => {
                     new responseListModal.responseList({
                        id: "box__modal-third",
                        target: target,
                        attr: {
                           classname: "box__comment",
                           attr: "comment",
                        },
                        url: "comment_likes",
                        style_class: "style-class__response-list",
                        secondary_overlay: "#overlay__comments-list",
                        secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
                        item_overlay: "overlay__comment",
                        item_overlay_bg: self.colors.item_overlay.listResponseSecondary,
                     });
                  },
               });
            });
         });
      },
   };

   /**
    * DROPDOWNS
    */
   this.dd = {
      postDropdown: (p) => {
         if (p.author.id == this.profile_data.id) {
            new dropdown.Icon({
               id: `dd-container__post-${p.id}`,
               trigger: `#dd-trigger__post-${p.id}`,
               data: [
                  ["Edit", "far fa-edit", "dd__edit"],
                  ["Delete", "fas fa-trash", "dd__delete"],
               ],
               item_overlay: "overlay__post",
               item_overlay_bg: self.colors.item_overlay.dropdown,
               cb: async (target) => {
                  /**
                   * DELETE POST MODAL
                   */
                  if (target.classList.contains("dd__delete")) {
                     new deletePostModal.DeletePost({
                        id: "box__modal",
                        target: target,
                        style_class: "style-class__post-delete",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.deletePostModal,
                        onsubmit: async () => {
                           self.postsPagination();
                        },
                     });
                     /**
                      * EDIT POST MODAL
                      */
                  } else if (target.classList.contains("dd__edit")) {
                     let folders_names = await folder.getFoldersNames();
                     new editPostModal.EditPost({
                        id: "box__modal",
                        target: target,
                        style_class: "style-class__edit-post",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.editPostModal,
                        onsubmit: async () => {
                           self.addEv.selectTag("#content__posts");
                        },
                        ontagcreate: (value) => {
                           tags.addTag(tags.createTag(value));
                        },
                        rendertags: (t) => {
                           t.forEach((tag) => {
                              tags.addTag(tags.createTag(tag.name));
                           });
                        },
                        renderdropdown: () => {
                           new dropdown.Dropdown({
                              id: "input__folder",
                              attr: "folder",
                              default_attr: ["folder", ""],
                              data: folders_names,
                              placeholder: "Select Folder",
                              bottom_item: "Create Folder",
                              style: {
                                 width: "100%",
                              },
                              cb: function (elem) {
                                 if (elem.classList.contains("item__bottom")) {
                                    new createFolderModal.CreateFolder({
                                       id: "box__modal-secondary",
                                       target: target,
                                       style_class: "style-class__folder-create",
                                       secondary_overlay: ".overlay__modal-item",
                                       secondary_overlay_bg: self.colors.secondary_overlay.createFolderModalSecondary,
                                       cb: async () => {
                                          let folders_names = await folder.getFoldersNames();
                                          folder.updateFoldersList({
                                             attr: "folder",
                                             data: folders_names,
                                             bottom_item: "Create Folder",
                                          });
                                          self.foldersPagination();
                                       },
                                    });
                                 }
                              },
                           });
                        },
                        renderautocomplete: () => {
                           form_post.renderAutoComplete();
                        },
                     });
                  }
               },
            });
         }
      },
      postDropdownSecondary: (p) => {
         if (p.author.id == this.profile_data.id) {
            new dropdown.Icon({
               id: `dd-container__post-modal-${p.id}`,
               trigger: `#dd-trigger__post-modal-${p.id}`,
               data: [
                  ["Edit", "far fa-edit", "dd__edit"],
                  ["Delete", "fas fa-trash", "dd__delete"],
               ],
               item_overlay: "overlay__post",
               item_overlay_bg: self.colors.item_overlay.dropdown,
               cb: async function (target) {
                  /**
                   * MODAL DELETE POST
                   */
                  if (target.classList.contains("dd__delete")) {
                     new deletePostModal.DeletePost({
                        id: "box__modal-secondary",
                        secondary_overlay: ".overlay__modal-item",
                        secondary_overlay_bg: self.colors.secondary_overlay.deletePostModalSecondary,
                        target: target,
                        style_class: "style-class__post-delete",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.deletePostModalSecondary,
                        onsubmit: async () => {
                           self.postsPagination();
                        },
                     });
                     /**
                      * MODAL EDIT POST
                      */
                  } else if (target.classList.contains("dd__edit")) {
                     let folders_names = await folder.getFoldersNames();
                     new editPostModal.EditPost({
                        id: "box__modal-secondary",
                        secondary_overlay: ".overlay__modal-item",
                        secondary_overlay_bg: self.colors.secondary_overlay.editPostModalSecondary,
                        target: target,
                        style_class: "style-class__edit-post",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.editPostModalSecondary,
                        onsubmit: async () => {
                           self.addEv.selectTag("#content__tag");
                        },
                        ontagcreate: (value) => {
                           tags.addTag(tags.createTag(value));
                        },
                        rendertags: (t) => {
                           t.forEach((tag) => {
                              tags.addTag(tags.createTag(tag.name));
                           });
                        },
                        renderdropdown: () => {
                           new dropdown.Dropdown({
                              id: "input__folder",
                              attr: "folder",
                              default_attr: ["folder", ""],
                              data: folders_names,
                              placeholder: "Select Folder",
                              bottom_item: "Create Folder",
                              style: {
                                 width: "100%",
                              },
                              cb: function (elem) {
                                 if (elem.classList.contains("item__bottom")) {
                                    new createFolderModal.CreateFolder({
                                       id: "box__modal-secondary",
                                       secondary_overlay: ".overlay__modal-item",
                                       target: target,
                                       style_class: "style-class__folder-create",
                                       cb: async () => {
                                          let folders_names = await folder.getFoldersNames();
                                          folder.updateFoldersList({
                                             attr: "folder",
                                             data: folders_names,
                                             bottom_item: "Create Folder",
                                          });
                                          self.foldersPagination();
                                       },
                                    });
                                 }
                              },
                           });
                        },
                        renderautocomplete: () => {
                           form_post.renderAutoComplete();
                        },
                     });
                  }
               },
            });
         }
      },
   };

   /**
    * MODALS
    */
   this.modals = {
      editProfile: async () => {
         let profile_id = document.querySelector(".box__main-content").getAttribute("profile");
         if (this.profile_data.id == parseInt(profile_id)) {
            document.querySelector("#icon__profile-edit").addEventListener("click", (e) => {
               new editProfileModal.EditProfile({
                  id: "box__modal",
                  target: e.target,
                  style_class: "style-class__edit-profile",
                  onsubmit: async (response) => {
                     profileDOM.editDOM(response.profile_data);
                  },
               });
            });
         }
      },
      followersModal: async () => {
         document.querySelector(".followers__counter").addEventListener("click", (e) => {
            new followListModal.followList({
               id: "box__modal",
               target: e.target,
               attr: {
                  classname: "box__main-content",
                  attr: "profile",
               },
               url: self.routes.get_followers,
               style_class: "style-class__followers-list",
               header: "Followers",
            });
         });
      },
      followingModal: async () => {
         document.querySelector(".following__counter").addEventListener("click", (e) => {
            new followListModal.followList({
               id: "box__modal",
               target: e.target,
               attr: {
                  classname: "box__main-content",
                  attr: "profile",
               },
               url: self.routes.get_following,
               style_class: "style-class__followers-list",
               header: "Following",
            });
         });
      },
      createFolder: async () => {
         let profile_id = document.querySelector(".box__main-content").getAttribute("profile");
         if (profile_id == this.profile_data.id) {
            let btn_create_folder = document.querySelector("#folders_create");
            btn_create_folder.addEventListener("click", (event) => {
               new createFolderModal.CreateFolder({
                  id: "box__modal",
                  target: event.target,
                  style_class: "style-class__folder-create",
                  cb: async () => {
                     self.foldersPagination();
                  },
               });
            });
         } else {
            let btn_create_folder = document.querySelector("#folders_create");
            btn_create_folder.remove();
         }
      },
      createPost: async () => {
         let profile_id = document.querySelector(".box__main-content").getAttribute("profile");
         if (profile_id == this.profile_data.id) {
            let btn_create_post = document.querySelector("#posts_create");
            btn_create_post.addEventListener("click", async (event) => {
               let folders_names = await folder.getFoldersNames();
               new createPostModal.CreatePost({
                  id: "box__modal",
                  target: event.target,
                  style_class: "style-class__create-post",
                  onsubmit: async () => {
                     self.postsPagination();
                  },
                  ontagcreate: (value) => {
                     if (value.trim() != "") {
                        tags.addTag(tags.createTag(value));
                     }
                  },
                  renderdropdown: () => {
                     new dropdown.Dropdown({
                        id: "input__folder",
                        attr: "folder",
                        default_attr: ["folder", ""],
                        data: folders_names,
                        placeholder: "Select Folder",
                        bottom_item: "Create Folder",
                        style: {
                           width: "100%",
                        },
                        cb: function (elem) {
                           if (elem.classList.contains("item__bottom")) {
                              new createFolderModal.CreateFolder({
                                 id: "box__modal-secondary",
                                 target: event.target,
                                 style_class: "style-class__folder-create",
                                 secondary_overlay: ".overlay__modal-item",
                                 secondary_overlay_bg: "rgba(0, 0, 0, 0.5)",
                                 cb: async () => {
                                    let folders_names = await folder.getFoldersNames();
                                    folder.updateFoldersList({
                                       attr: "folder",
                                       data: folders_names,
                                       bottom_item: "Create Folder",
                                    });
                                    self.foldersPagination();
                                 },
                              });
                           }
                        },
                     });
                  },
                  renderautocomplete: () => {
                     form_post.renderAutoComplete();
                  },
               });
            });
         } else {
            let btn_create_post = document.querySelector("#posts_create");
            btn_create_post.remove();
         }
      },
   };

   /**
    * TAGS PAGINATION
    */
   this.tagsPagination = async () => {
      let tags_pagination_settings = {
         container_id: self.pagination_data.tags_pagination_container,
         route: self.routes.get_tags,
         page: self.pagination_data.tags_page,
         sort_method: self.pagination_data.tags_sort,
         profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
         folder_id: self.pagination_data.folder,
         tag_id: self.pagination_data.tag,
         cb: (data) => {
            self.renderTagsPaginated(data, "#content__posts");
         },
         getPage: () => {
            return self.pagination_data.tags_page;
         },
         getSortMethod: () => {
            return self.pagination_data.tags_sort;
         },
         getFolder: () => {
            return self.pagination_data.folder;
         },
         getTag: () => {
            return self.pagination_data.tag;
         },
         setPage: (page) => {
            self.pagination_data.tags_page = page;
         },
      };

      return new pagination.CreatePagination(tags_pagination_settings);
   };

   /**
    * POSTS PAGINATION
    */
   this.postsPagination = async () => {
      let posts_pagination_settings = {
         container_id: self.pagination_data.posts_pagination_container,
         route: self.routes.get_posts_all,
         page: self.pagination_data.posts_page,
         sort_method: self.pagination_data.posts_sort,
         profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
         folder_id: self.pagination_data.folder,
         tag_id: self.pagination_data.tag,
         cb: (data) => {
            self.renderPostsPaginated(data, "#content__posts");
         },
         getPage: () => {
            return self.pagination_data.posts_page;
         },
         getSortMethod: () => {
            return self.pagination_data.posts_sort;
         },
         getFolder: () => {
            return self.pagination_data.folder;
         },
         getTag: () => {
            return self.pagination_data.tag;
         },
         setPage: (page) => {
            self.pagination_data.posts_page = page;
         },
      };

      return new pagination.CreatePagination(posts_pagination_settings);
   };

   /**
    * FOLLOW PAGINATION
    */
   this.followPagination = async () => {
      let follow_pagination_settings = {
         container_id: self.pagination_data.follow_pagination_container,
         route: self.routes.get_follow,
         page: self.pagination_data.follow_page,
         sort_method: self.pagination_data.follow_sort,
         profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
         folder_id: self.pagination_data.folder,
         tag_id: self.pagination_data.tag,
         cb: (data) => {
            self.renderPostsPaginated(data, "#content__follow");

            let count = data.pagination_data.totalCount;
            document.querySelector("#header__following").innerHTML = `Following (${count})`;
         },
         getPage: () => {
            return self.pagination_data.follow_page;
         },
         getSortMethod: () => {
            return self.pagination_data.follow_sort;
         },
         getFolder: () => {
            return self.pagination_data.folder;
         },
         getTag: () => {
            return self.pagination_data.tag;
         },
         setPage: (page) => {
            self.pagination_data.follow_page = page;
         },
      };

      return new pagination.CreatePagination(follow_pagination_settings);
   };

   /**
    * TAG PAGINATION
    */
   this.taggedPostPagination = async () => {
      let tag_pagination_settings = {
         container_id: self.pagination_data.tag_modal_pagination_container,
         route: self.routes.get_posts_all,
         page: self.pagination_data.tag_modal_page,
         sort_method: self.pagination_data.tag_modal_sort,
         profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
         folder_id: self.pagination_data.folder,
         tag_id: self.pagination_data.tag_modal_tag,
         cb: (data) => {
            self.renderPostsByTag(data, "#content__tag");
         },
         getPage: () => {
            return self.pagination_data.tag_modal_page;
         },
         getSortMethod: () => {
            return self.pagination_data.tag_modal_sort;
         },
         getFolder: () => {
            return self.pagination_data.folder;
         },
         getTag: () => {
            return self.pagination_data.tag_modal_tag;
         },
         setPage: (page) => {
            self.pagination_data.tag_modal_page = page;
         },
      };

      return new pagination.CreatePagination(tag_pagination_settings);
   };

   /**
    * SORT TAGS
    */
   this.sortTags = () => {
      new dropdown.Dropdown({
         id: "tags__sort",
         attr: "sort",
         default_attr: ["sort", "popular"],
         data: [
            ["Most Used", "popular"],
            ["By Name", "name"],
         ],
         placeholder: "Sort by",
         style: {
            width: "200px",
         },
         cb: function (elem) {
            self.pagination_data.tags_sort = elem.getAttribute("sort");
            self.tagsPagination();
         },
      });
   };

   /**
    * SORT POTS
    */
   this.sortPosts = () => {
      new dropdown.Dropdown({
         id: "posts__sort",
         attr: "sort",
         default_attr: ["sort", "desc"],
         data: [
            ["Newest", "desc"],
            ["Most liked", "liked"],
            ["Most commented", "commented"],
         ],
         placeholder: "Sort by",
         style: {
            width: "200px",
         },
         cb: function (elem) {
            self.pagination_data.posts_sort = elem.getAttribute("sort");
            self.postsPagination();
         },
      });
   };

   /**
    * SORT FOLLOWED POTS
    */
   this.sortFollow = () => {
      new dropdown.Dropdown({
         id: "follow__sort",
         attr: "sort",
         default_attr: ["sort", "desc"],
         data: [
            ["Newest", "desc"],
            ["Most liked", "liked"],
            ["Most commented", "commented"],
         ],
         placeholder: "Sort by",
         style: {
            width: "200px",
         },
         cb: function (elem) {
            self.pagination_data.follow_sort = elem.getAttribute("sort");
            self.followPagination();
         },
      });
   };

   /**
    * RENDER TAGS PAGINATED
    */
   this.renderTagsPaginated = async (data, container) => {
      if (data.main_data.length == 0) {
         let text = "No tags created";
         tagsDOM.noContent(container, text);
         return false;
      }
      tagsDOM.addTags(data.main_data);

      /**
       * SELECT TAG
       */
      new tags.toggleTags({
         tag: ".box__tag",
         getTag: () => {
            return self.pagination_data.tag;
         },
         setTag: (tag) => {
            self.pagination_data.tag = tag;
         },
         cb: (tag, name) => {
            let posts_pagination_settings = {
               container_id: self.pagination_data.posts_pagination_container,
               route: self.routes.get_posts_all,
               page: 1,
               sort_method: self.pagination_data.posts_sort,
               profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
               folder_id: self.pagination_data.folder,
               tag_id: self.pagination_data.tag,
               cb: (data) => {
                  self.renderPostsPaginated(data, "#content__posts");

                  if (tag) {
                     let count = data.pagination_data.totalCount;
                     document.querySelector("#header__posts").innerHTML = `${name} (${count})`;
                  } else {
                     let count = data.pagination_data.totalCount;
                     document.querySelector("#header__posts").innerHTML = `Users Posts (${count})`;
                  }
               },
               getPage: () => {
                  return self.pagination_data.posts_page;
               },
               getSortMethod: () => {
                  return self.pagination_data.posts_sort;
               },
               getFolder: () => {
                  return self.pagination_data.folder;
               },
               getTag: () => {
                  return self.pagination_data.tag;
               },
               setPage: (page) => {
                  self.pagination_data.posts_page = page;
               },
            };

            new pagination.CreatePagination(posts_pagination_settings);
         },
      });
   };

   /**
    * RENDER POSTS PAGINATED (POSTS / DROPDOWN /MODAL EDIT / MODAL DELETE / MODAL RESPONSE LIST)
    */
   this.renderPostsPaginated = async (data, container) => {
      if (data.main_data.length == 0) {
         let text = "No content";
         postDOM.noContent(container, text);
         return false;
      }

      postDOM.addPosts({
         data: data.main_data,
         container: container,
         dropdown_trigger_id: "dd-trigger__post",
         dropdown_container_id: "dd-container__post",
         getUser: () => {
            return this.profile_data;
         },
      });

      likes.toggleLikes();
      accordion.expandAccordions();

      /**
       * TOGGLE LIKES
       */
      likes.toggleLikes();

      /**
       * OPEN TAG
       */
      this.addEv.selectTag(container);

      /**
       * LIST LIKES / DISLIKES
       */
      this.addEv.listResponse(container);

      /**
       * MODAL COMMENTS
       */
      this.addEv.openComments(container);

      /**
       * POST DROPDOWN
       */
      data.main_data.forEach((p) => {
         this.dd.postDropdown(p);
      });
   };

   /**
    * RENDER MODAL POSTS PAGINATED
    */
   this.renderPostsByTag = async (data, container) => {
      if (data.main_data.length == 0) {
         let text = "No posts created";
         postDOM.noContent(container, text);
         return false;
      }

      postDOM.addPosts({
         data: data.main_data,
         container: container,
         dropdown_trigger_id: "dd-trigger__post-modal",
         dropdown_container_id: "dd-container__post-modal",
         getUser: () => {
            return this.profile_data;
         },
      });
      accordion.expandAccordions();

      /**
       * TOGGLE LIKES
       */
      likes.toggleLikes();

      /**
       * OPEN TAG
       */
      this.addEv.selectTag(container);

      /**
       * LIST LIKES / DISLIKES
       */
      this.addEv.listResponseSecondary(container);

      /**
       * MODAL COMMENTS
       */
      this.addEv.openCommentsSecondary(container);

      /**
       * POST DROPDOWN
       */
      data.main_data.forEach((p) => {
         this.dd.postDropdownSecondary(p);
      });
   };

   /**
    * INIT INDEX PAGE CONTENT
    */
   this.init = async () => {
      this.profile_data = await this.getProfileData();

      this.sortTags();
      this.tagsPagination();

      this.sortPosts();
      this.postsPagination();

      if (this.profile_data.logged) {
         this.sortFollow();
         this.followPagination();
      }

      accordion.expandAccordions();
   };

   this.init();
}

document.addEventListener("DOMContentLoaded", () => {
   new IndexPage();
});
