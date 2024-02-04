<template>
    <h1> Courses Page </h1>
    <div>
        <CourseFilter />
    </div>
    <div>
        <CourseList />
    </div>
</template>


<script >
    import CourseList from '@/components/CourseList.vue'
    import CourseFilter from '@/components/CourseFilter.vue'
    
    export default {
        name: 'CoursesView',
        components: {
            CourseList,
            CourseFilter,
        }
    }    
</script>
