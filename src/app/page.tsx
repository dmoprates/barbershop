import { SearchIcon } from "lucide-react"
import Header from "./__components/header"
import { Input } from "./__components/ui/input"
import { Button } from "./__components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-xl font-bold">Olá, Diego!</h2>
        <p>Terça-Feira, 06 de Agosto.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/Banner01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
