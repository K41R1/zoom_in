<template>
    <path :id="this.id" :data-section="section" v-b-tooltip.hover :title="this.title" :d="this.coord" @click="showInfo()"/>
</template>

<script>
    export default {
        name: "Gouvernorat",
        props: {
            id: String,
            coord: String,
            title: String,
            section: String,
        },
        methods: {
            showInfo: function () {
                this.$parent.isInfoShowed = true;
                this.$parent.govId = this.id;
                //let GovInfoComponent = this.$parent.$refs.govInfo;
                //GovInfoComponent.init(this.id);
            }
        }
    }
</script>