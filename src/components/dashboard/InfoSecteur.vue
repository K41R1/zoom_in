<template>
    <b-tabs content-class="mt-3" justified>
        <b-tab v-for="sec in secteur" :title="sec.st">
            <b-row>
                <table class="table table-bordered">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">Établissement</th>
                        <th scope="col">Année</th>
                        <th scope="col">&nbsp;&nbsp;</th>
                    </tr>
                    </thead>
                    <tr v-for="(k, v) in sec.inf">
                        <td>{{ v }}</td>
                        <td>{{ k.année }}</td>
                        <td @click.prevent="showRapports(k.rapports, v)"><a href="#">voir les rapports</a></td>
                    </tr>
                </table>
            </b-row>
            <b-row v-if="rpt" class="mt-4 pt-3">
                <component is="RapportsEtab" v-bind:r="rpt" v-bind:e="etb" ></component>
            </b-row>
        </b-tab>
    </b-tabs>
</template>

<script>
    import RapportsEtab from './RapportsEtab';
    export default {
        name: "info-secteur",
        components: {
          RapportsEtab
        },
        props: {
            secteur: Array
        },
        data() {
            return {
                rpt: null,
                etb: null
            }
        },
        methods: {
            showRapports: function (rapports, etab) {
                this.rpt = rapports;
                this.etb = etab;
            }
        }
    }
</script>
