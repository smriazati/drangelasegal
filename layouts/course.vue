<template>
    <div class="layout-container layout-transparent-header">
        <SiteHeader />

        <div class="site-content">
            <main class="site-main" ref="main">
                <nuxt />
            </main>
            <SiteFooter />
        </div>

    </div>
</template>

  
<style lang="scss">
.layout-transparent-header {
    header.site-header {
        position: relative;
        z-index: 11;
    }

    .site-content {
        position: absolute;
        z-index: 9;
    }
}
</style>