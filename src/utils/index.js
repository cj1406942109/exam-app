import router from '@/router'
import { getSubject } from '@/api'
/**
 * 返回上一级路由
 */
function goBack() {
  router.go(-1)
}

/**
 * 编程控制页面跳转
 * @param {*} name 目的路由名称
 * @param {*} params 携带参数
 */
function pageJump(name, params) {
  router.push({
    name,
    params
  })
}

function setItem(name, value) {
  sessionStorage.setItem(name, value)
}
function getItem(name) {
  return sessionStorage.getItem(name)
}
function removeItem(name) {
  sessionStorage.removeItem(name)
}


function getSubjectList() {
  // let subjectList = []
  let subjectList = [{"id":1,"cn_name":"\u6570\u5b66","en_name":"math","level_type":"k12","level":"senior","index":2},{"id":2,"cn_name":"\u8bed\u6587","en_name":"chinese","level_type":"k12","level":"senior","index":1},{"id":3,"cn_name":"\u82f1\u8bed","en_name":"english","level_type":"k12","level":"senior","index":3},{"id":4,"cn_name":"\u7269\u7406","en_name":"physics","level_type":"k12","level":"senior","index":4},{"id":5,"cn_name":"\u5316\u5b66","en_name":"chemistry","level_type":"k12","level":"senior","index":5},{"id":6,"cn_name":"\u751f\u7269","en_name":"biology","level_type":"k12","level":"senior","index":6},{"id":7,"cn_name":"\u5730\u7406","en_name":"geography","level_type":"k12","level":"senior","index":7},{"id":8,"cn_name":"\u5386\u53f2","en_name":"history","level_type":"k12","level":"senior","index":8},{"id":9,"cn_name":"\u653f\u6cbb","en_name":"politics","level_type":"k12","level":"senior","index":9},{"id":10,"cn_name":"\u6587\u79d1\u7efc\u5408","en_name":"art","level_type":"k12","level":"senior","index":10},{"id":11,"cn_name":"\u7406\u79d1\u7efc\u5408","en_name":"science","level_type":"k12","level":"senior","index":11},{"id":12,"cn_name":"\u5176\u4ed6","en_name":"others","level_type":"k12","level":"senior","index":12},{"id":13,"cn_name":"\u8bed\u6587","en_name":"chinese","level_type":"k12","level":"junior","index":1},{"id":14,"cn_name":"\u6570\u5b66","en_name":"math","level_type":"k12","level":"junior","index":2},{"id":15,"cn_name":"\u82f1\u8bed","en_name":"english","level_type":"k12","level":"junior","index":3},{"id":16,"cn_name":"\u7269\u7406","en_name":"physics","level_type":"k12","level":"junior","index":4},{"id":17,"cn_name":"\u5316\u5b66","en_name":"chemistry","level_type":"k12","level":"junior","index":5},{"id":18,"cn_name":"\u751f\u7269","en_name":"biology","level_type":"k12","level":"junior","index":6},{"id":19,"cn_name":"\u5730\u7406","en_name":"geography","level_type":"k12","level":"junior","index":7},{"id":20,"cn_name":"\u5386\u53f2","en_name":"history","level_type":"k12","level":"junior","index":8},{"id":21,"cn_name":"\u653f\u6cbb","en_name":"politics","level_type":"k12","level":"junior","index":9},{"id":22,"cn_name":"\u6587\u79d1\u7efc\u5408","en_name":"art","level_type":"k12","level":"junior","index":10},{"id":23,"cn_name":"\u7406\u79d1\u7efc\u5408","en_name":"science","level_type":"k12","level":"junior","index":11},{"id":24,"cn_name":"\u5176\u4ed6","en_name":"others","level_type":"k12","level":"junior","index":12},{"id":25,"cn_name":"\u6587\u6570","en_name":"math_art","level_type":"k12","level":"senior","index":13},{"id":26,"cn_name":"\u7406\u6570","en_name":"math_science","level_type":"k12","level":"senior","index":14},{"id":27,"cn_name":"\u6280\u672f","en_name":"computer_science","level_type":"k12","level":"senior","index":15},{"id":28,"cn_name":"\u6570\u5b66\u4e00","en_name":"math1","level_type":"research","level":"research","index":1},{"id":29,"cn_name":"\u82f1\u8bed\u4e00","en_name":"english1","level_type":"research","level":"research","index":2},{"id":30,"cn_name":"\u521d\u6570","en_name":"elementary_math","level_type":"research","level":"research","index":3},{"id":31,"cn_name":"\u903b\u8f91","en_name":"logic","level_type":"research","level":"research","index":4},{"id":32,"cn_name":"\u653f\u6cbb","en_name":"politics","level_type":"research","level":"research","index":5},{"id":33,"cn_name":"\u6570\u5b66\u4e8c","en_name":"math2","level_type":"research","level":"research","index":6},{"id":34,"cn_name":"\u6570\u5b66\u4e09","en_name":"math3","level_type":"research","level":"research","index":7},{"id":35,"cn_name":"\u7ba1\u7406\u7c7b\u8054\u8003","en_name":"manage","level_type":"research","level":"research","index":8},{"id":36,"cn_name":"\u7ecf\u6d4e\u7c7b","en_name":"jingji","level_type":"research","level":"research","index":9},{"id":37,"cn_name":"\u7ecf\u6d4e\u5b66\u4e13\u4e1a\u8bfe","en_name":"jingjizhuanye","level_type":"research","level":"research","index":10},{"id":38,"cn_name":"\u91d1\u878d\u4e13\u7855","en_name":"jinrongzhuanshuo","level_type":"research","level":"research","index":11},{"id":39,"cn_name":"\u7ffb\u8bd1\u7855\u58eb","en_name":"fanyi","level_type":"research","level":"research","index":12},{"id":40,"cn_name":"\u897f\u533b\u7efc\u5408","en_name":"xiyi","level_type":"research","level":"research","index":13},{"id":41,"cn_name":"\u6570\u5b66","en_name":"math","level_type":"k12","level":"primary","index":2},{"id":42,"cn_name":"\u8bed\u6587","en_name":"chinese","level_type":"k12","level":"primary","index":1},{"id":43,"cn_name":"\u82f1\u8bed","en_name":"english","level_type":"k12","level":"primary","index":3},{"id":44,"cn_name":"\u6570\u5b66","en_name":"math","level_type":"international","level":"ALEVEL-CAIE","index":1},{"id":45,"cn_name":"\u7269\u7406","en_name":"physics","level_type":"international","level":"ALEVEL-CAIE","index":2},{"id":46,"cn_name":"\u5316\u5b66","en_name":"chemistry","level_type":"international","level":"ALEVEL-CAIE","index":3},{"id":47,"cn_name":"\u7ecf\u6d4e","en_name":"economy","level_type":"international","level":"ALEVEL-CAIE","index":4},{"id":48,"cn_name":"\u9ad8\u6570","en_name":"mathematics","level_type":"international","level":"ALEVEL-CAIE","index":5},{"id":49,"cn_name":"\u6570\u5b66","en_name":"math","level_type":"international","level":"ALEVEL-EDX","index":6},{"id":50,"cn_name":"\u7269\u7406","en_name":"physics","level_type":"international","level":"ALEVEL-EDX","index":7},{"id":51,"cn_name":"\u5316\u5b66","en_name":"chemistry","level_type":"international","level":"ALEVEL-EDX","index":8},{"id":52,"cn_name":"\u7ecf\u6d4e","en_name":"economy","level_type":"international","level":"ALEVEL-EDX","index":9},{"id":53,"cn_name":"\u9ad8\u6570","en_name":"mathematics","level_type":"international","level":"ALEVEL-EDX","index":10},{"id":54,"cn_name":"\u751f\u7269","en_name":"biology","level_type":"international","level":"ALEVEL-EDX","index":11},{"id":55,"cn_name":"\u751f\u7269","en_name":"biology","level_type":"international","level":"ALEVEL-CAIE","index":12}]

  // if (getItem('subjectList')) {
  //   subjectList = JSON.parse(getItem('subjectList'))
  // } else {
  //   getSubject().then(data => {
  //     subjectList = JSON.parse(JSON.stringify(data))
  //     setItem(JSON.stringify(subjectList))
  //   })
  // }
  return subjectList
}

function getSubjectById(id) {
  let subjectList = getSubjectList()
  let subject = null
  subjectList.forEach(ele => {
    if (ele.id === id) {
      subject = ele
      return false
    }
  })
  return subject
}

export default {
  goBack,
  pageJump,
  setItem,
  getItem,
  removeItem,
  getSubjectList,
  getSubjectById
}
