<script>
export default {
    name: 'ProjectsCard',
    props: { project: Object },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;

            return `${day}/${month}/${year} - alle ${hours}:${minutes}:${seconds}`;
        },

        abstract() {
            const abstract = this.project.description.slice(0, 200)
            return abstract + '...';
        }
    },

};

</script>

<template>
    <div class="card my-3">
        <div class="card-header">
            <h2>{{ project.name }}</h2>
        </div>
        <div class="card-body">
            <p>{{ abstract }}</p>
        </div>
        <div class="card-footer">
            <time><small>Aggiornato: </small> {{ projectDate }}</time>
        </div>
    </div>
</template>