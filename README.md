# Vue3-Router

vue router 에서 변경된 기능과 기본 기능을 학습하기 위한 Repository.

## 로딩 방식

Vue router는 vue내부적으로 사용되는 기능이다.

이 기능은 처음 페이지에 접근할 때 라우터에 설정된 컴포넌트들을 미리 로딩한다.

이후 페이지 이동이 일어나면, 로드되었던 페이지를 보여주는 방식이다.

따라서 서버에 요청은 웹에 접근 초기에만 일어나며, 이후는 요청이 일어나지 않는다.

그러나, 페이지가 늘어나 다량의 페이지를 초기에 로드하려면 처음 페이지를 열때 상당한 부하가 일어날 수 밖에 없다.

이를 위해 Lazy 로딩이 필요하다.

Lazy Loading은 페이지 요청이 일어나게 되면 그때 웹서버에 페이지를 요청하여 vue를 통해 생성된 js파일을 메모리에 저장한다.

기존의 방식대로 라우팅을 한다면,

### 기존 로딩

초기 모든 페이지 요청 및 로드 → 라우터 변경 → 변경에 따른 페이지 보여줌

### Lazy 로딩

첫 페이지 요청 및 로드 → 라우터 변경 → 변경된 페이지 요청 및 로드 → 화면에 보여줌

이와 같은 방식으로 각각 다른 흐름의 요청을 할 수 있게 된다.

## Named Router

라우터를 정의할 때 이름으로 라우터 push를 할 수 있다.

예를 들어 기존 방식은 다음과 같이 정의를 하고 있다고 할 때 라우터 path를 변경하고 싶다면,

/route 폴더의 index.js를 변경하고, 내부적으로 설정된 기타 경로들도 모두 변경해 주어야 하는 상황이 생길것이다.

```json
(<router-link to="/about"> About </router-link>)
```

하지만 다음과 같이 이름으로 정의해 둔다면, router path가 변경되더라도, Name만 About으로 정의가 되어있다면, path를 일일이 변경할 필요가 없게 된다.

이는 변화에 유연하게 대처할 수 있는 방법이라고 할 수 있다.

```json
<router-link :to="{name: 'About'}"> About </router-link>
```

주의: object를 바인딩할 때는 to앞에 반드시 콜론을 붙인다.

`:to="{name: 'About'}"`

하지만 유연함을 믿고 너무 체계없는 코딩을 하게 된다면, 추후 변경요청이 생겼을 때 우회로를 확보할 수 없다.

따라서 이런 기능들은 알아두되 추후를 위해 기존의 방식을 최대한 지키며 작업을 하는게 좋을 것이다.

가장 좋은 방법은 named체계로 모든 프로젝트를 설정해 두고, 이후에 url이 변경되거나, 라우터 변경 요청이 있을 시 반영할 수 있도록 하는 방법일 것이다.

변수로 사용가능한 요소를 상수로 사용하는 것은 지양해야 하는 방법이기 때문이다.

## Nested Routers

폴더 방식으로 Views들을 정리하고 싶다면 폴더안에 자식객체를 넣는 방식으로 구현할 수 있다.

라우터에 정의된 구조 그대로 구현할 수 있어서 더욱 직관적인 구조를 구현할 수 있기 때문이다.

`/route/index.js`

```jsx
// ...import

const routes = [
  // ...routes 기존 코드 생략

  // 라우터를 다음과 같이 id가 있는 라우터와 id가 없는 라우터를 정의한다.
  {
    path: "/jobs",
    name: "Jobs",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/jobs/Jobs.vue"),
  },

  // :id는 변수이다.
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: () =>
      import(
        /* webpackChunkName: "job-details" */ "../views/jobs/JobDetails.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

param으로 id를 정의해서 넘길 수 있다.

위 route에서 id로 값을 넘기므로, param에서는 id를 정의해서 넘긴다.

`/views/jobs/jobs.vue`

```jsx
<router-link :to="{name: 'JobDetails',params:{id:job.id}}">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{job.title}}</h5>
      <p class="card-text">{{job.details}}</p>
    </div>
  </div>
</router-link>
```

## Router with props

받는 쪽에서는 이를 props로 받을 수 있다.

다음과 같이 props를 true로 설정해 놓으면, JonDetails.vue 는 id라는 변수를 props로 받아서 사용할 수 있게 된다.

`/route/index.js`

```jsx
 {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "job-details" */ '../views/jobs/JobDetails.vue'),
		props:true
  },
```

`/views/jobs/JobDetails.vue`

```jsx
<template>
  <h1>Job Detils</h1>
  <div>
    The Job Id is {{id}}
  </div>
</template>

<script>
// router 에서 props로 설정이 되어있으므로, 다음과 같이 설정할 수 있다.
export default {
  props:{
    id:String
  },
}
</script>
```

## 파일 구조

- /src/views/jobs/jobs.vue
- /src/views/jobs/jobDetails.vue

# 스타일

vue router 이용시 스타일 또한 편하게 줄 수 있다.

라우터에 따라 vue router 내부적으로 router-link-exact-active 라는 클래스를 부여하기 때문에 해당 클래스에만 하이라이트를 주는 스타일을 정의하기만 하면, 화면에서는 클래스를 정의할 필요 없이 내장된 클래스 체계에 따라 스타일을 줄 수 있게 되는 것이다.
