import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Formik, } from 'formik';
import * as yup from 'yup';


import HeaderContainer from '../../components/header/HeaderContainer'


const Authentication = ({ setLoginAuthUserData, setRegistrationAuthUserData, isAuth }) => {
	const location = useLocation();
	const isLogin = location.pathname === "/login"



	const validationSchemaLogin = yup.object().shape({
		email: yup.string().email('Введите корректный e-mail').required('Обязательное поле'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
	})

	const validationSchemaRegistration = yup.object().shape({
		email: yup.string().email('Введите корректный e-mail').required('Обязательное поле'),
		confirmEmail: yup.string().email('Введите корректный e-mail').oneOf([yup.ref('email')], 'e-mail не совпадает').required('Обязательное поле'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
		confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
	})



	if (isAuth) return <Redirect to={'/'} />

	return (
		<div>
			<HeaderContainer />
			<div className="auth-page">
				<div className="container page">
					<div className="row">
						<div className="col-md-6 offset-md-3 col-xs-12">
							<h1 className="text-center">{isLogin ? "Авторизация" : "Регистрация"}</h1>
							{!isLogin ?
								<>
									<p className="text-center">
										Есть аккаунт? <Link to="/login">Войдите</Link>
									</p>
									<Formik
										initialValues={{
											email: "",
											confirmEmail: "",
											password: "",
											confirmPassword: "",
										}}
										validateOnBlur
										onSubmit={async (values) => {
											try {
												await setRegistrationAuthUserData(values.email, values.password)
											} catch (error) {
												console.log(error.response.data.message)
											}
										}}
										validationSchema={validationSchemaRegistration}
									>

										{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
											<form>
												<fieldset>
													<fieldset className="form-group">
														<input
															type="email"
															className="form-control form-control-lg"
															name={"email"}
															placeholder="Email"

															value={values.email}
															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.email && errors.email && <p>{errors.email}</p>}

													<fieldset className="form-group">
														<input
															type="email"
															className="form-control form-control-lg"
															name={"confirmEmail"}

															placeholder="Подтвердите Email"
															value={values.confirmEmail}
															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}

													<fieldset className="form-group">
														<input
															type="password"
															className="form-control form-control-lg"
															name={"password"}
															placeholder="Введите пароль"
															value={values.password}


															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.password && errors.password && <p>{errors.password}</p>}

													<fieldset className="form-group">
														<input
															type="password"
															className="form-control form-control-lg"
															name={"confirmPassword"}
															placeholder="Подтвердите пароль"
															value={values.confirmPassword}


															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

													<button
														className="btn btn-lg btn-primary float-right"
														type='submit'
														disabled={!isValid && !dirty}
														onClick={handleSubmit}
													>
														Регистрация
													</button>
												</fieldset>
											</form>

										)}

									</Formik>
								</>
								:
								<>
									<p className="text-center">
										Нет аккаунта? <Link to="/register">Создать аккаунт</Link>
									</p>

									<Formik
										initialValues={{
											email: "",
											confirmEmail: "",
											password: "",
											confirmPassword: "",
										}}
										validateOnBlur
										onSubmit={async (values) => {
											try {
												await setLoginAuthUserData(values.email, values.password)

											} catch (error) {
												console.log(error.response.data.message)
											}
										}}
										validationSchema={validationSchemaLogin}
									>
										{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
											<form>
												<fieldset>
													<fieldset className="form-group">
														<input
															type="email"
															className="form-control form-control-lg"
															name={"email"}
															placeholder="Email"

															value={values.email}
															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.email && errors.email && <p>{errors.email}</p>}
													<fieldset className="form-group">
														<input
															type="password"
															className="form-control form-control-lg"
															name={"password"}
															placeholder="Введите пароль"
															value={values.password}


															onBlur={handleBlur}
															onChange={handleChange}
														/>
													</fieldset>
													{touched.password && errors.password && <p>{errors.password}</p>}


													<button
														className="btn btn-lg btn-primary float-right"
														type='submit'
														disabled={!isValid && !dirty}
														onClick={handleSubmit}
													>
														Вход
													</button>
												</fieldset>
											</form>

										)}

									</Formik>
								</>
							}

						</div>
					</div>
				</div>
			</div>

		</div >

	)
};

export default Authentication;