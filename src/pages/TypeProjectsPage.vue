<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import AppPagination from '../components/AppPagination.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api';

export default {
    name: 'TypeProjectsPage',
    components: { AppAlert, ProjectsList, AppPagination },
    data: () => ({
        hasError: false,
        isLoading: false,
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;
            if (!endpoint) endpoint = `${apiBaseUrl}/types/${this.$route.params.id}/projects`;
            axios.get(endpoint).then(res => {
                const { data, links } = res.data.projects;
                this.projects = { data, links };
                this.type = res.data.type;
            }).catch(() => {
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.fetchProjects();
    }

};

</script>

<template>
    <AppAlert :is-open="hasError" @close="hasError = false" class="my-3" />
    <AppLoader v-if="isLoading" />
    <div v-else>
        <h2 class="my-3">Project di Tipo {{ type?.label }}</h2>
        <ProjectsList :projects="projects.data" />
        <footer>
            <AppPagination :links="projects.links" @change-page="fetchProjects" />
        </footer>
    </div>
</template>