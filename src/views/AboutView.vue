<template>
  <div class="about">
    <h2>{{$t("about.buildWith")}}</h2>
    <br>
    <div class="about-list">
      <ul class="list">
        <li class="list-item">JS framework : Vue3</li>
        <li class="list-item">State Management: Pinia</li>
        <li class="list-item">Scripting: Typescript</li>
        <li class="list-item">Database: Cloud Firestore</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.about .about-list{
  padding: 2rem;
  border-radius: 8px;
	border: 1px solid rgba(98, 98, 98, 0.212);
}
li {
  list-style-type: circle;
}

ul {
  line-height: 1.5;
  margin-left: -40px;
  list-style-position: inside;
}

ul li:not(:last-child) {
  margin-bottom: 20px;
}
</style>
