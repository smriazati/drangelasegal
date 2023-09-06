<template>
    <span>
        <span v-if="type === 'internal'">
            <nuxt-link :to="destination ? destination : '/'">
                <slot />
            </nuxt-link>
        </span>
        <span v-if="type === 'email'">
            <a :href="`mailto:${email}`" :target="blank ? '_blank' : ''">
                <slot />
            </a>
        </span>
        <span v-if="type === 'external'">
            <a :href="href" :target="blank ? '_blank' : ''">
                <slot />
            </a>
        </span>
    </span>
</template>
  
<script>
export default {
    props: ['type', 'destination', 'href', 'blank', 'email']
}
</script>
<style scoped>
a {
    text-decoration: underline;
}
</style>