import { loginApi } from "@/pages/api/auth";
import { AxiosResponse } from "axios";
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { message, Space, Tabs } from "antd";
import { CSSProperties, useContext } from "react";
import { useState } from "react";
import { AppContext } from "@/config/AppContext";

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};
interface ValueForm {
  values: {
    email: string;
    password: string;
  };
}

const FormLogin = () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  const { state, dispatch } = useContext(AppContext);
  const onFinish = async (values: ValueForm) => {
    const res = (await loginApi(values)) as AxiosResponse;
    console.log("res:: ", res);
    console.log("values:: ", values);
    if (res?.data?.token) {
      message.success("Đăng nhập thành công");
      dispatch({ type: "SHOW_MODAL_LOGIN", payload: false });
    } else {
      message.error(res?.error || "Đăng nhập thất bại");
    }
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: "white" }}>
        <LoginForm
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          // subTitle="全球最大的代码托管平台"
          onFinish={onFinish}
          actions={
            <Space>
              Đăng nhập với
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
          submitter={{
            searchConfig: {
              submitText: "Xác nhận",
            },
          }}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={"account"} tab={"Đăng nhập tài khoản"} />
            {/* <Tabs.TabPane key={"phone"} tab={"手机号登录"} /> */}
          </Tabs>
          {loginType === "account" && (
            <>
              <ProFormText
                name="email"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Vui lòng nhập email"}
                rules={[
                  {
                    required: true,
                    message: "Email không được bỏ trống!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Vui lòng nhập mật khẩu"}
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu không được để trống！",
                  },
                ]}
              />
            </>
          )}
          {loginType === "phone" && (
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: <MobileOutlined className={"prefixIcon"} />,
                }}
                name="mobile"
                placeholder={"手机号"}
                rules={[
                  {
                    required: true,
                    message: "请输入手机号！",
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: "手机号格式错误！",
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                captchaProps={{
                  size: "large",
                }}
                placeholder={"请输入验证码"}
                captchaTextRender={(timing: any, count: number) => {
                  if (timing) {
                    return `${count} ${"获取验证码"}`;
                  }
                  return "获取验证码";
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码！",
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success("获取验证码成功！验证码为：1234");
                }}
              />
            </>
          )}
          {/* <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: "right",
              }}
            >
              忘记密码
            </a>
          </div> */}
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default FormLogin;
