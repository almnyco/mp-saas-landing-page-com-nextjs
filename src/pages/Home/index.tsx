import WomanIllustration from "/public/illus-woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import logo from "/public/header/logo.svg";
import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <section className="h-fit p-24 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center gap-16">
          <div className="max-w-screen-md  flex flex-col text-center gap-6">
            <h1 className="text-6xl text-black font-bold text-center">
              Simplifique Seus Estudos
            </h1>
            <p className="text-xl text-foreground-text">
              Deixe que nós fazemos a curadoria para você. Assine nossa
              plataforma e receba todos os meses um ebook novo de programação.
            </p>
          </div>
          <form
            id="submit-form"
            className="w-full justify-center flex flex-col items-center gap-2"
          >
            <div className="w-full max-w-[26rem] flex flex-row justify-center items-center gap-4">
              <Input
                className="w-full bg-white shadow-md max-sm:w-fit"
                placeholder="Coloque seu e-mail"
                id="send-email"
                type="email"
                about="aaa"
              />
              <Button className="" type="submit">
                Assine agora
              </Button>
            </div>
            <p className="text-xs p-2 w-fit text-foreground-text ">
              Comece sua assinatura agora mesmo. Cancele quando quiser.
            </p>
          </form>
        </div>
      </section>
      <section className="h-fit w-full flex flex-col justify-start items-center gap-12 p-9 bg-white">
        <div className="max-w-screen-md  flex flex-col text-center gap-6">
          <h6 className="w-full text-[2.5rem] text-black font-bold">
            Como funciona?
          </h6>
          <div className="w-full flex flex-row justify-between">
            <Image src={WomanIllustration} alt="A woman carrying boxes" />

            <ul className="flex flex-col gap-6 justify-center text-end">
              <li className="text-3xl text-foreground-text">
                Acesso a 1 ebook por mês
              </li>
              <li className="text-3xl text-foreground-text">
                Curadoria especial
              </li>
              <li className="text-3xl text-foreground-text">
                Cancele quando quiser
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="h-fit w-full flex flex-col justify-start items-center gap-12 p-28">
        <div className="max-w-screen-lg  flex flex-col text-center gap-6">
          <h6 className="w-full text-6xl text-black font-bold">
            Preço Simples e Transparente
          </h6>
          <p className="text-xl max-w-screen-md text-foreground-text">
            Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
            para você? Assine o nosso plano mensal Pro Premium VIP e garanta
            mensalmente um ebook novo de programação. E por menos de um café por
            dia.
          </p>
        </div>

        <div className="bg-white w-full max-w-sm flex flex-col gap-8 p-8 rounded-xl border border-color">
          <div className="flex flex-col gap-3">
            <p className="text-xl text-black font-semibold">
              Plano Pro Premium VIP
            </p>
            <p className="text-sm max-w-screen-md text-foreground-text">
              Tudo que você precisa para seus estudos
            </p>
          </div>

          <div className="flex flex-row items-end">
            <h4 className="text-3xl text-black font-semibold">R$29</h4>
            <p className="text-xl text-foreground-text font-semibold">/mês</p>
          </div>

          <ul className="flex flex-col gap-3 justify-center text-start">
            <li className="text-md text-foreground-text">Acesso ilimitado</li>
            <li className="text-md text-foreground-text">1 ebook por mês</li>
            <li className="text-md text-foreground-text">Curadoria especial</li>
            <li className="text-md text-foreground-text">
              Cancele a qualquer momento
            </li>
          </ul>
          <Button className="w-full max-screen-w-80">Assine agora</Button>
        </div>
      </section>
      <section className="h-fit w-full flex flex-col justify-start items-center gap-12 p-28 bg-white">
        <div className="max-w-screen-lg  flex flex-col text-center gap-6 justify-center items-center">
          <h6 className="w-full text-6xl text-black font-bold">
            Pronto Para Mudar Sua Vida?
          </h6>
          <p className="text-xl max-w-screen-md text-foreground-text">
            Faça como milhares de outras pessoas. Assine nosso produto e tenha
            garantido seus estudos
          </p>
          <Button className="w-full max-w-96">Assine agora</Button>
          <p className="text-xs p-2 w-fit text-foreground-text ">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </div>
      </section>
      <footer className="w-full bg-white p-4 flex flex-col justify-center items-center">
        <Image src={logo} width={156} alt="logo" />
        <p className="text-xs p-2 w-fit text-foreground-text ">
          © 2024 LivroSaaS. Todos os direitos reservados.
        </p>
      </footer>
    </Fragment>
  );
}
