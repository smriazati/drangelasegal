<template>
    <div class="accordion-item" :class="isCollapsed ? 'collapsed' : 'expanded'">
        <div class="expand-area">
            <button @click="toggleCollapse">
                <h3 v-if="question" class="large-text-style">{{ question }}</h3>
            </button>
        </div>
        <div class="collapse-area">
            <div v-if="answer" class="rte">
                <SanityContent :blocks="answer.rte"></SanityContent>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        question: {
            type: String,
        },
        answer: {
            type: Object
        }
    },
    data() {
        return {
            isCollapsed: true
        }
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

<style lang="scss" scoped>
.collapse-area {
    overflow: hidden;
    max-width: 700px;

    &>*:first-child {
        padding-top: 22px;
    }
}

.expand-area button {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;

    &:after {
        content: '';
        background-image: url('../../assets/icons/chevron.svg');
        background-size: contain;
        background-repeat: no-repeat;
        color: $golden;
        width: 20px;
        height: 24px;
    }
}

.collapsed {
    .expand-area {
        padding-bottom: 22px;
    }

    .collapse-area {
        height: 0px;
    }
}

.expanded {
    .collapse-area {
        height: auto;
        padding-bottom: 22px;
    }
}
</style>