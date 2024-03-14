<script setup lang="ts">
// @ts-ignore
import { Vue3Lottie } from 'vue3-lottie'
import RegisterJSON from '../assets/lottie/register.json'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const router = useRouter();

interface RuleForm {
  nickName: string
  password: string
  comfirmPassword: string
}

const ruleFormRef = ref<FormInstance>()
const formRef = reactive<RuleForm>({
  nickName: '',
  password: '',
  comfirmPassword: ''
})

/** 表单规则限制 */
const rules = reactive<FormRules<RuleForm>>({
  nickName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      type: 'string',
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: '请输入八位密码',
      trigger: ['blur', 'change'],
    }
  ],
  comfirmPassword: [
    {
      required: true,
      message: '请输入确认密码',
      trigger: 'blur',
    },
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: '请输入八位密码',
      trigger: ['blur', 'change'],
    }
  ],
});

/** 
 * 注册
 * @desc 提交表单
 * @param { FormInstance | undefined } formEl 表单实例
 * */
const submitForm = async function (formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await userApi.register(formRef.nickName, formRef.password);
      if (res.code === Status.OK) {
        ElMessage.success('登录成功');
        router.push("/login");
      }
    } else {
      ElMessage.error('请正确填写表单！');
      return false
    }
  })
}

/** 回车键登录 */
const keyDown = (e: { keyCode: number }) => {
  if (e.keyCode == 13 || e.keyCode == 100) {
    submitForm(ruleFormRef.value);
  }
}

eventListener('keydown', keyDown);
</script>

<template>
  <AuthBox>
    <template v-slot:title>
      植物监测系统
    </template>
    <template v-slot:lottie>
      <Vue3Lottie :animationData="RegisterJSON" width="80%" />
    </template>
    <template v-slot:header>
      注册
    </template>
    <template v-slot:content>
      <el-form ref="ruleFormRef" :model="formRef" label-position="top" :rules="rules" label-width="120px" mt-2>
        <el-form-item prop="nickName" label="用户名">
          <el-input v-model="formRef.nickName" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="formRef.password" />
        </el-form-item>
        <el-form-item prop="comfirmPassword" label="确认密码">
          <el-input type="password" v-model="formRef.comfirmPassword" />
        </el-form-item>
        <el-form-item>
          <div flex justify-between w-full>
            <router-link to="/login" tag="div" class="goRegister" text-3 color-green-600>
              已有账号，去登陆
            </router-link>
            <button type="button" bg-green-500 color-white rd="1.5" @click="submitForm(ruleFormRef)"
              @keydown.enter="keyDown($event)" w-30 work-spacing-5>
              注&nbsp;&nbsp;&nbsp;册
            </button>
          </div>
        </el-form-item>
      </el-form>
    </template>
  </AuthBox>
</template>

<route lang="yaml">
name: Register
meta:
  layout: auth
  requiresAuth: false
</route>
