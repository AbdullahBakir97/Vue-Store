<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-3"><CourseFilter /></div>
            <div class="col-lg-9"><CourseList :courses="courses" /></div>
        </div>
    </div>

</template>


<script >
    import CourseList from '@/components/CourseList.vue'
    import CourseFilter from '@/components/CourseFilter.vue'
    import { courses } from '../temp-data'

    export default {
        name: 'CoursesView',
        
        components: {
            CourseList,
            CourseFilter,
        },
        data(){
            return {
                courses:courses
            }
        }
        
    }    
</script>
