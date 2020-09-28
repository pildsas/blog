import * as helpers from "../helpers";

export function sectionEditProfile() {
   let section = document.createElement("div");
   section.classList.add("section__profile-form");

   let html = `   
   <div class="column__left"> 
      <div class="input-group__cover">
         <div class="cover__label">Profile Image</div>
         <label for="input__cover" class="cover__btn-upload">
            <i class="fas fa-image"></i>
         </label>
         <div class="cover__btn-clear">
            <i class="fas fa-times"></i>
         </div>
         <div class="cover__cover-preview">
            <img src="" alt="Cover Preview" class="cover-preview__image">
            <span class="cover-preview__text">Profile Image</span>
         </div>
         <input type="file" class="input-group__input input__cover" id="input__cover">
      </div>
   </div> 

   <div class="column__right">
      <div class="input-group">
         <label for="">Firstname</label>
         <input type="text" class="input__firstname">
      </div>
      <div class="input-group">
         <label for="">Lastname</label>
         <input type="text" class="input__lastname">
      </div>
      <div class="input-group">
         <label for="">Alias</label>
         <input type="text" class="input__alias">
      </div>
      <button class="btn__form-submit">Update</button>
   </div>`;

   section.innerHTML = html;
   return section;
}

export function sectionProfileInfo(profile) {
   let section = document.createElement("div");
   section.classList.add("section__author-info");

   let html = `
         <img src="" alt="" class="author__img"> 

         <div class="author__info">
            <div class="author__name">John Doe</div>
            <div class="author__alias">@pildsas</div>
            <div class="author__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus molestias aperiam quam officia quasi laboriosam ab eius at ad.</div>
            <div class="author__footer">
               
               <div class="footer__posts">
                  <span>posts</span>
                  <span>34</span>
               </div>
               
               <button class="btn__follow">Follow</button>

               <div class="footer__followers">
                  <span>followers</span>
                  <span>105</span>
               </div>

         </div> 
      </div>  
   `;

   section.innerHTML = html;
   return section;
}

export function replaceDOM(section) {
   let content = document.querySelector(".main-content__author");
   content.innerHTML = "";
   content.appendChild(section);
}

export function profileSection() {
   let html = `
<div class="main-content__header accordion__trigger" id="header__author">
<div class="header__text">Author</div> 
<i class="fas fa-chevron-down header__icon"></i>  
</div>
<div class="main-content__author accordion__content">

<div class="section__author-info">
<img src="{{ profile.getAvatar() }}" alt="" class="author__img"> 
<div class="section__icons">
<i class="fas fa-user-edit" id="icon__profile-edit"></i>
</div>

<div class="author__info">
<div class="author__name">{{ profile.getFirstname() }} {{ profile.getLastname() }}</div>
<div class="author__alias">
{% if profile.getNickname() %}
@{{ profile.getNickname() }}    
{% endif %}
</div>

<div class="author__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus molestias aperiam quam officia quasi laboriosam ab eius at ad.</div>
<div class="author__footer">

<div class="footer__posts">
<span>following</span>
<span class="following__counter">{{ profile.getFollowing().count() }}</span>
</div>



<button class="btn__follow {% if follow %}remove__follower{% else %}add__follower{% endif %}
{% if profile.getUser() == app.user %} btn__disabled {% endif %}
">{% if follow %}Unfollow{% else %}Follow{% endif %}</button>

<div class="footer__followers">
<span>followers</span>
<span class="followers__counter">{{followers_count}}</span>
</div>

</div> 
</div>  
</div>
   `;
   console.log(html);
   return html;
}

export function editDOM(response) {
   let img = document.querySelector(".author__img");
   let name = document.querySelector(".author__name");
   let alias = document.querySelector(".author__alias");
   let about = document.querySelector(".author__about");

   img.setAttribute("src", response.avatar);
   name.innerHTML = `${response.firstname} ${response.lastname}`;
   alias.innerHTML = response.nickname ? `@${response.nickname}` : "";
   about.innerHTML = response.about ? response.about : "";
}
