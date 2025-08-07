import { SearchIcon } from "lucide-react"
import Header from "./__components/header"
import { Input } from "./__components/ui/input"
import { Button } from "./__components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./__components/ui/card"
import { Badge } from "./__components/ui/badge"
import { Avatar, AvatarImage } from "./__components/ui/avatar"
import { db } from "./__lib/prisma"
import BarbershopItem from "./__components/barbershop-item"

const Home = async () => {
  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <div>
      {/*TEXTO*/}
      <Header />
      <div className="p-4">
        <h2 className="text-xl font-bold">Olá, Diego!</h2>
        <p>Terça-Feira, 06 de Agosto.</p>
        {/*BUSCA*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="[&:: -webkit-scrollbar]:hidden mt-6 flex gap-3 overflow-x-scroll">
          <Button className="gap-2" variant="secondary">
            <Image alt="Cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image alt="Barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="Acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="Sombrancelha"
              src="/sobrancelha.svg"
              width={16}
              height={16}
            />
            Sombrancelha
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image alt="Massagem" src="/massagem.svg" width={16} height={16} />
            Massagem
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="Hidratacao"
              src="/hidratacao.svg"
              width={16}
              height={16}
            />
            Hidratação
          </Button>
        </div>

        {/*IMAGEM*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/Banner01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/*AGENDAMENTO*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="itens-center flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/avatar.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/*DIREITA*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        {/*RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/* POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-grey-400 text-sm">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
