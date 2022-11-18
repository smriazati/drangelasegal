<template>
    <div class="newsletter-form">
        <div v-if="data">
            <h2 v-if="data.headline">{{ data.headline }}</h2>
            <p v-if="data.text">{{ data.text }}</p>
            <div v-if="data.useCustomForm">
                <div v-if="data.embedCode">
                    <div v-html="data.embedCode"></div>
                </div>
            </div>
            <div v-else>
                <SystemAweberBasicForm />
            </div>
        </div>
    </div>
</template>
  
<script>

/* data template 
formData: {
    headline: '',
    text: '',
    useCustomForm: false,
    embedCode: undefined
}
*/
export default {
    props: {
        data: {
            required: true,
            type: Object,
        }
    }
};
</script>

<style lang="scss">
.post-newsletter {
    background: $sunlight;
    padding: 48px 24px !important;
    margin-bottom: 32px;
    margin-top: 64px;
}

.post-newsletter .newsletter-form,
.post-newsletter .newsletter-form h2 {
    margin-top: 0;
}
</style>