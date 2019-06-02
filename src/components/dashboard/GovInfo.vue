<template>
    <b-row v-if="info">
        <info-secteur :secteur="this.secteur"></info-secteur>
    </b-row>
</template>

<script>
    import data from '../../../data.json';
    import InfoSecteur from './InfoSecteur';
    export default {
        name: "GovInfo",
        components: {
            InfoSecteur
        },
        props: {
          id: String
        },
        data() {
            return {
                d: data,
                info: {},
                secteur: []
            }
        },
        mounted: function() {
            let id = 'TN-11';
            console.log(this.id);
            for (let i = 0; i < this.d.length; i++) {
                if (this.d[i].gov === this.id) {
                    this.info = this.d[i].secteur;
                }
            }
            for(let k in this.info) {
                this.secteur.push({st : k, inf: this.info[k]})
            }
        },
        methods: {
            init: function (id) {

            }
        }
    }
</script>
