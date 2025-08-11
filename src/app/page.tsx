import Header from "./__components/header"
import { Button } from "./__components/ui/button"
import Image from "next/image"
import { db } from "./__lib/prisma"
import BarbershopItem from "./__components/barbershop-item"
import { quickSearchOptions } from "./__constants/search"
import BookingItem from "./__components/booking-item"
import Search from "./__components/search"
import Link from "next/link"

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
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="[&:: -webkit-scrollbar]:hidden mt-6 flex gap-3 overflow-x-scroll">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
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
        <BookingItem />
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
    </div>
  )
}

export default Home
