import Button, { ButtonVariant } from "@/components/Button";
import RefreshIcon from "@/components/Icons/Refresh";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="p-6">
      <div className="grid gap-6">
        <section className="grid gap-2">
          <div className="flex space-x-2 w-full">
            <Button variant={ButtonVariant.primary}>Попробовать снова</Button>

            <Button variant={ButtonVariant.primary} disabled>
              Попробовать снова
            </Button>

            <Button variant={ButtonVariant.primary} loading={true}>
              Попробовать снова
            </Button>
          </div>

          <div className="flex space-x-2 w-full">
            <Button
              variant={ButtonVariant.primary}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>

            <Button
              variant={ButtonVariant.primary}
              disabled
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>

            <Button
              variant={ButtonVariant.primary}
              loading={true}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
          </div>
        </section>
        <section className="grid gap-2">
          <div className="flex space-x-2 w-full">
            <Button variant={ButtonVariant.dark}>Попробовать снова</Button>
            <Button variant={ButtonVariant.dark} disabled>
              Попробовать снова
            </Button>

            <Button variant={ButtonVariant.dark} loading={true}>
              Попробовать снова
            </Button>
          </div>

          <div className="flex space-x-2 w-full">
            <Button
              variant={ButtonVariant.dark}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
            <Button
              variant={ButtonVariant.dark}
              disabled
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>

            <Button
              variant={ButtonVariant.dark}
              loading={true}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
          </div>
        </section>
        <section className="grid gap-2">
          <div className="flex space-x-2 w-full">
            <Button variant={ButtonVariant.darkOutlined}>
              Попробовать снова
            </Button>
            <Button variant={ButtonVariant.darkOutlined} disabled>
              Попробовать снова
            </Button>

            <Button variant={ButtonVariant.darkOutlined} loading={true}>
              Попробовать снова
            </Button>
          </div>

          <div className="flex space-x-2 w-full ">
            <Button
              variant={ButtonVariant.darkOutlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
            <Button
              variant={ButtonVariant.darkOutlined}
              disabled
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>

            <Button
              variant={ButtonVariant.darkOutlined}
              loading={true}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
          </div>
        </section>

        <section className="grid gap-2">
          <div className="flex space-x-2 w-full ">
            <Button
              variant={ButtonVariant.primary}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              disabled
              variant={ButtonVariant.primary}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              variant={ButtonVariant.dark}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              disabled
              variant={ButtonVariant.dark}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              variant={ButtonVariant.darkOutlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              disabled
              variant={ButtonVariant.darkOutlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
          </div>
        </section>
      </div>
      <div className="pt-4" />
      <div className="flex space-x-3">
        <div className="w-[300px]">
          <Input placeholder="Макака с бананом в сша" className="w-full" />
        </div>
        <div className="w-[300px]">
          <Input
            value="Макака с бананом в сша"
            placeholder="Макака с бананом в сша"
            className="w-full"
            error="Неверно указана почта"
          />
        </div>
      </div>
    </main>
  );
}
