import Vue from 'vue'
const empty = {
  label: '该项',
  regex: ''
}
const username = {
  label: '用户名',
  regex: ''
}
const nameCN = {
  label: '姓名',
  regex: '^[\u4e00-\u9fa5]{2,}$'
}
const mobile = {
  label: '手机号',
  regex: '^1[34578]\\d{9}$'
}
const password = {
  label: '密码',
  regex: '^(?:\\d+|[a-zA-Z]+|[!@#$%^&*._]+){6,12}$'
}
const email = {
  label: '邮箱',
  regex: '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$'
}
const card = {
  label: '银行卡号',
  regex: '^([1-9]{1})(\\d{14}|\\d{18})$'
}
// 注册一个全局自定义指令 `v-ckLine`
Vue.directive('ckLine', {
  bind: function (el, binding, vNode) {
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vNode) {
    el.addEventListener('keyup', function (event) {
      // 首先去除已有样式
      el.parentNode.className = el.parentNode.className.replace('input-error', '').trim()
      // if (!event.keyCode) { // 加上这个判断就是在提交时，才会校验
      // 判断是否是否必填
      let isRequired = binding.value.required
      let regex = binding.value.regex
      if (isRequired) {
        if (!el.value || el.value === '') {
          el.parentNode.className += ' input-error'
          return
        }
      }
      if (regex) {
        if (!el.value.match(eval(regex).regex)) {
          el.parentNode.className += ' input-error'
        }
      }
      // 判断正则
      // debugger
    })
  }
})
// 注册一个全局自定义指令 `v-ckSpan`
Vue.directive('ckSpan', {
  bind: function (el, binding, vNode) {
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vNode) {
    el.addEventListener('blur', function (event) {
      // 首先去除已有样式
      var checkText=el.nextSibling.nextSibling
      var checkClass=el.previousSibling.previousSibling
      checkText.innerText = ''
      el.style.borderBottomColor='#67c23a'
      checkClass.classList.add("success-color")
      checkClass.classList.remove("error-color")
      // if (!event.keyCode) { // 加上这个判断就是在提交时，才会校验
      // 判断是否必填
      let isRequired = binding.value.required
      let regex = binding.value.regex
      if (isRequired) {
        if (!el.value || el.value === '') {
          checkText.innerText = `${eval(regex).label}不能为空！`
          el.style.borderBottomColor='#f56c6c'
          checkClass.classList.add("error-color")
          checkClass.classList.remove("success-color")
          return
        }
      }
      if (regex) {
        if (!el.value.match(eval(regex).regex)) {
          el.nextSibling.nextSibling.innerText = `${eval(regex).label}格式错误！`
          el.style.borderBottomColor='#f56c6c'
        }
      }
    })
  }
})

// 注册一个全局自定义指令 `v-ckSub`
Vue.directive('ckSub', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vNode) {
    el.addEventListener('click', function (event) {
      let elements = document.getElementsByClassName('input-core')
      var evObj = document.createEvent('HTMLEvents')
      evObj.initEvent('keyup', true, true)
      for (let element of elements) {
        element.dispatchEvent(evObj)
      }
      let errorInputs = document.getElementsByClassName('input-error')
      let errorSpan = document.getElementsByClassName('input_error')
      console.log(errorSpan.length)
      let ckErrorSpan = true
      if (errorSpan.length != 0) {
        for (let span of errorSpan) {
          if (span.innerText != '') {
            ckErrorSpan = false
          }
        }
      }
      console.log(ckErrorSpan)
      if (errorInputs.length === 0 && ckErrorSpan) {
        vNode.context.submit()
      }
    })
  }
})

Vue.directive('dbClick', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      if(!el.disabled) {
        el.disabled = true;
        let timer = setTimeout( () => {
          el.disabled = false;
        },1000)
      }
    })
  }
})
