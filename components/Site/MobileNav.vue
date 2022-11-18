<template>
    <div>
        <div v-if="content">
            <nav class="nav-primary">
                <ul v-if="content.links">
                    <li v-for="item in content.links" :key="item._id" @click="toggleNav()">
                        <SystemLinkObject :data="item" />
                    </li>
                </ul>
            </nav>
            <nav class="nav-secondary">
                <ul v-if="content.linksSecondary">
                    <li v-for="item in content.linksSecondary" :key="item._id" @click="toggleNav()">
                        <SystemLinkObject :data="item" />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
    
    
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "mobileMenu"][0]`;
export default {
    async fetch() {
        this.content = await this.$sanity.fetch(query);
    },
    fetchOnServer: false,
    data: () => ({
        content: null,
    }),
    methods: {
        toggleNav() {
            this.$emit('on-link-click');
        }
    }
};
</script>
  