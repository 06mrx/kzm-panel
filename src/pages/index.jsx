import Head from 'next/head'
import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { storageService } from '@/services/storage.service'
import useSWR from 'swr';
export default function Home() {
  const router = useRouter();
  // router.push('/auth/login')
  const formData = {
    password: useRef(),
    email: useRef()
  }
  let userString = storageService.get('user')

  if (userString) {
    let user = JSON.parse(userString)
    if (storageService.checkRole(user.role_id) == 'Administrator') {
      router.push('/administrator')
    }
  }
  const fetcher = url => fetch(process.env.API + url, {
    method: 'GET',
  }).then((res) => res.json())
  const { data } = useSWR('/api/statisticts', fetcher)
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content="kazama panel for good people" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <main>
        <div className='h-screen w-screen'>
          <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
              <Image src={'/favicon/android-icon-144x144.png'} width={65} height={65} alt='favicon' />
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost normal-case font-bold text-yellow-300 text-4xl hidden md:block lg:block">{process.env.APP_NAME}</a>
            </div>
            <div className="navbar-end">
              {/* <Link href={'/auth/register'}>
                <button className='btn bg-yellow-300 border-none mr-3'>
                  Daftar
                </button>
              </Link> */}
              <Link href={'/auth/login'}>
                <button className='btn text-yellow-300 bg-white border-yellow-300 mr-3'>
                  Login
                </button>
              </Link>
            </div>
          </div>

          <section className='w-full items-center bg-base-100 flex flex-col-reverse md:flex-row lg:flex-row justify-center'>
            {/* <div className='p-10'>
              <blockquote className="text-xl md:text-3xl lg:text-3xl italic font-semibold">
                <svg aria-hidden="true" className="w-10 h-10" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                <p>&quot;Setiap anak berhak mendapatkan layanan PAUD Berkualitas sebagai pondasi membangun sumber daya manusia yang berkualitas&quot;</p>
              </blockquote>
            </div> */}
            <div className=' shadow-lg'>
              {/* <Image src={'/assets/images/landing1.png'} width={1000} height={700} alt='photo' /> */}
            </div>
          </section>

          <section className='bg-base-100 mt-5 p-5'>
            <h1 className='text-4xl text-center font-bold mb-4 mt-3'>{process.env.APP_NAME} Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/legalize.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Lorem Ipsum</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.legalize} Pelayanan</h3> */}
                <p className='text-center text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus nisi ante, vitae faucibus ipsum molestie quis. Nullam nec elit turpis.</p>
              </div>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/student-mutation.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Proin Vitae</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.stundent_mutation} Pelayanan</h3> */}
                <p className='text-center text-lg'>Proin vitae mi eget odio consectetur blandit vel et mauris. In et tortor ac mauris ornare congue. Vivamus sodales eros arcu, non tincidunt diam rutrum non.</p>
              </div>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/replace.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Fusce Sollic</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.diploma_replacement} Pelayanan</h3> */}
                <p className='text-center text-lg'>Fusce sollicitudin ullamcorper metus, fermentum iaculis tellus tristique sit amet. Praesent iaculis dolor ut justo malesuada pretium. Donec at facilisis tortor.</p>
              </div>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/dayak.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Mauuris Diam</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.cultural_heritage} Pelayanan</h3> */}
                <p className='text-center text-lg'>Mauris diam lectus, blandit nec placerat non, feugiat vitae ex. Donec fringilla dapibus quam nec blandit. Aliquam erat volutpat. Curabitur fringilla erat sit amet nisi bibendum, vitae euismod mauris cursus</p>
              </div>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/studio.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Duis Neque</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.studio} Pelayanan</h3> */}
                <p className='text-center text-lg'>Duis at neque non ante dapibus sollicitudin. Sed tempor ligula ac ex viverra aliquam. Donec blandit viverra risus ut rutrum</p>
              </div>
              <div className='rounded-xl p-3 shadow-xl border border-gray-200 bg-base-100 flex flex-col items-center'>
                <Image src={'/assets/images/internship.png'} width={100} height={100} alt='poto' />
                <h2 className='text-2xl font-bold py-4'>Vestibulum Risus</h2>
                {/* <h3 className=' font-mono  text-xl'>{data?.data?.internship} Pelayanan</h3> */}
                <p className='text-center text-lg'>Vestibulum risus dui, ultricies sit amet nibh eu, posuere ornare mi. Fusce nec varius quam. Cras vehicula ac justo vel posuere. Phasellus commodo nisi purus, non tempor nunc congue vel</p>
              </div>
            </div>

          </section>
          <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
              <Image src={'/favicon/android-icon-144x144.png'} width={90} height={90} alt='favicon' />
              <p>{process.env.APP_NAME}<br />© Copyright {process.env.APP_OWNER}. All Rights Reserved</p>
              <p>{process.env.APP_ADDRESS}</p>
            </div>
            {/* <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </div> */}
          </footer>
        </div>
      </main>
    </>
  )
}
