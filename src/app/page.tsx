import { SearchIcon } from "lucide-react"
import Header from "./__components/header"
import { Input } from "./__components/ui/input"
import { Button } from "./__components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./__components/ui/card"
import { Badge } from "./__components/ui/badge"
import { Avatar, AvatarImage } from "./__components/ui/avatar"

const Home = () => {
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
      </div>
    </div>
  )
}

export default Home
