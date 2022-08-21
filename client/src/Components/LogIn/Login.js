import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { authLogin, authRegister } from '../../api/authReq'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {
  let [categories] = useState({
    School: [
      {
        id: 1,
        title: 'School',
      },
    ],
    Student: [
      {
        id: 1,
        title: 'Student',
      },
    ],
    Teacher: [
      {
        id: 1,
        title: 'Teacher',
      },
    ],
  })
  const navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');

  const login = async () => {
    if(uniqueId === "" || password === "") setError("Please fill all fields")
    else
    {
      const data = await authLogin({ uniqueId, password });
      if(data.error) 
      {
        setError(data.error);
        setUniqueId('');
        setPassword('');
      }
      else 
      {
        navigate(`/${data?.user?.userType}_D`);
      }
    }
  }

  const signup = async () => {
    if(email === "" || schoolName === "") setError2("Please fill all fields")
    else
    {
      const data = await authRegister({ name: schoolName, email });
      if(data.error)
      {
        setError2(data.error);
        setEmail('');
        setSchoolName('');
      }
      else 
      {
        window.alert("Mail has been sent!");
        window.location.reload();
      }
    }
  }

  return (
   
      <div className="min-w- sm:px-0 h-screen bg-gradient-to-r from-orange-500 to-yellow-500 pt-10 flex flex-col lg:pt-20 lg:pl-10  items-center">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1 mb-5 mx-2 w-96">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-orange-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-96">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
            >
              <div>
                {posts.map((post) => (
                  <main class="bg-white max-w-lg p-8 md:p-12 mx-5 rounded-lg shadow-2xl">
                      {
                        ((post.title !== 'School') || (post.title === 'School' && (!showSignUp))) &&
                        <>
                          <section>
                              <h3 class="font-bold text-2xl">WELCOME</h3>
                              <p class="text-gray-600 pt-2">Log in to your <span className="font-bold">{post.title}</span> account.</p>
                          </section>
    
                          {
                            (error !== "") &&
                            <p class="text-red-600">{error}</p>
                          }
                  
                          <section class="mt-10">
                              <form class="flex flex-col" method="POST" action="#">
                                  <div class="mb-6 pt-3 rounded ">
                                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="uniqueid">UniqueId</label>
                                      <input type="text" id="uniqueid" value={uniqueId}
                                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"
                                        onChange={(e) => { setUniqueId(e.target.value) }}
                                      />
                                  </div>
                                  <div class="mb-6 pt-3 rounded">
                                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                                      <input type="password" id="password" value={password}
                                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                      />
                                  </div>
                                  <div class="flex justify-end">
                                      <a href="/#contact" class="text-sm text-orange-600 hover:text-orange-700 hover:underline mb-6">Forgot your password?</a>
                                  </div>
                                  <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                                    type="button"
                                    onClick={login}
                                  >
                                    Log In
                                  </button>
                              </form>
                          </section>
                          {
                            (post.title === 'School') &&
                            <div class="max-w-lg text-center mt-6">
                              <p class="text-sm text-orange-600">Don't have an account? <span onClick={() => { setShowSignUp(true) }} class="font-bold hover:underline hover:cursor-pointer">Sign up</span>.</p>
                            </div>
                          }
                        </>
                      }
                      {
                        (post.title === 'School' && showSignUp) &&
                        <>
                          <section>
                              <h3 class="font-bold text-2xl">WELCOME ABOARD! </h3>
                              <p class="text-gray-600 pt-2">
                                Please enter your email. We will send your credentials to you via email.
                              </p>
                          </section>
                          {
                            (error2 !== "") &&
                            <p class="text-red-600">{error2}</p>
                          }
                          <section class="mt-10">
                              <form class="flex flex-col" method="POST" action="#">
                                  <div class="mb-6 pt-3 rounded ">
                                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="name">School Name</label>
                                      <input type="text" id="name" value={schoolName}
                                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"
                                        onChange={(e) => { setSchoolName(e.target.value) }}
                                      />
                                  </div>
                                  <div class="mb-6 pt-3 rounded ">
                                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="uniqueid">Email</label>
                                      <input type="email" id="email" value={email}
                                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                      />
                                  </div>
                                  <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                                    type="button"
                                    onClick={signup}
                                  >
                                    Send Credentials
                                  </button>
                              </form>
                          </section>
                          <div class="max-w-lg text-center mt-6">
                            <p class="text-sm text-orange-600">Already have an account? <span onClick={() => { setShowSignUp(false) }} class="font-bold hover:underline hover:cursor-pointer">Sign In</span>.</p>
                          </div>
                        </>
                      }
                  </main>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    
   
  )
}
