<template>
    <div>
        <h4 class="text-justify">{{ e }} :</h4>
        <table class="table table-bordered table-striped">
            <thead class="thead-light">
                <tr>
                    <th>Rapport</th>
                    <th>Lien</th>
                </tr>
            </thead>
            <tr v-for="rapport in r">
                <td>{{ rapport.txt }}</td>
                <td><a :href="rapport.lien" target="_blank"> voir plus</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'rapports-etab',
        props: {
            e: String,
            r: Array
        },
        mounted() {
            console.log(this.r)
        }
    }
</script>