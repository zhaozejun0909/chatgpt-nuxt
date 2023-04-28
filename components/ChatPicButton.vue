<template>
    <div>
      <button class="rounded-md cursor-pointer">
        <Pic
          :class="!store.chatImgModel ? 'text-slate-300' : 'text-blue-600'"
          size="24"
        />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Pic } from "@icon-park/vue-next";
  import { useChatStore } from "@/stores/chat";

  const store = useChatStore();
  
  </script>
  