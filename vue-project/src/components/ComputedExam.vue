<template>
  <h1>full Name :{{ fullName }}</h1>
</template>
<script>
//모듈 형태로 만들어서 외뷍 사용 가능하도록
// Export default 를 사용한다.
export default {
  data() {
    return {
      firstName: "DDOCHI",
      lastName: "GO",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
