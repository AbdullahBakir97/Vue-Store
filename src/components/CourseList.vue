<template>
    <div class="row my-5">
        <div class="col-lg-3" v-for="course in courses" :key="course.id">
            <div class="card">
                <img :src="course.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ course.name }}</h5>
                    <p class="card-text">{{ course.category }}</p>
                    <p class="card-text">{{ course.price }}$</p>
                    <RouterLink :to="'/' + course.id " class="btn btn-primary">Course Details</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    import { courses } from '../temp-data'

    export default {
        name: 'CourseList',
        data (){
            return {
                courses:courses
            }
        }
    }    
</script>