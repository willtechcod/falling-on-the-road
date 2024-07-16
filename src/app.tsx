import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInpuntOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestInpuntOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestInpuntOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-[720px] w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo-app.svg" alt="falling on the road" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                type="text"
                placeholder="Para onde você vai"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                type="text"
                placeholder="Quando?"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />
            {isGuestInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 hover:bg-zinc-700 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex flex-1 items-center gap-2">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                  type="text"
                  placeholder="Quem estará na viagem?"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium">
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela falling on.TheRoad você automaticamente
          concorda <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
