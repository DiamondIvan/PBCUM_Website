import { Mail } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function JoinPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-soft-radial px-4 pb-16 pt-28 text-ink sm:px-6 sm:pt-36">
        <section className="mx-auto max-w-3xl rounded-[32px] border border-black/6 bg-white p-6 shadow-soft sm:p-12">
          <h1 className="text-3xl font-semibold sm:text-5xl">入会咨询</h1>
          <p className="mt-5 max-w-xl text-base leading-[1.85] text-black/70">
            有意加入马来亚大学华文学会的同学，可向学会查询本学年的会员登记方式与开放时间。
          </p>
          <a href="mailto:pbcum41@gmail.com" className="btn-primary mt-8 inline-flex">
            <Mail className="h-4 w-4" aria-hidden="true" />
            电邮学会
          </a>
          <p className="mt-4 font-latin text-sm text-black/65">pbcum41@gmail.com</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
