<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
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
    <div class="card my-5">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h2>{{ project.name }}</h2>
            <router-link v-if="project.type" :to="{ name: 'type-projects', params: { id: project.type.id } }">
                <div class="badge" :style="{ backgroundColor: project.type?.color }">{{ project.type?.label }}</div>
            </router-link>
        </div>
        <div class="card-body">
            <img v-if="project.image" width="100" class="me-2 float-start" :src="project.image" :alt="project.name">
            <p>{{ isDetail ? project.description : abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <time><small>Aggiornato: </small> {{ projectDate }}</time>
            <div v-if="project.technologies?.length">
                <span v-for="technology in project.technologies" :key="technology.id" class="badge me-2"
                    :style="{ backgroundColor: technology.color }">{{ technology.label }}</span>
            </div>
            <div>
                <router-link v-if="!isDetail" class="btn btn-sm btn-primary"
                    :to="{ name: 'project-detail', params: { id: project.id } }">Vedi</router-link>
            </div>
        </div>
    </div>
</template>