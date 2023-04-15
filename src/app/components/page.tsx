import Button, { ButtonVariant } from "@/components/Button";
import RefreshIcon from "@/components/Icons/Refresh";
import Input from "@/components/TextField/Input";
import Textarea from "@/components/TextField/Textarea";

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
            <Button variant={ButtonVariant.outlined}>Попробовать снова</Button>
            <Button variant={ButtonVariant.outlined} disabled>
              Попробовать снова
            </Button>

            <Button variant={ButtonVariant.outlined} loading={true}>
              Попробовать снова
            </Button>
          </div>

          <div className="flex space-x-2 w-full ">
            <Button
              variant={ButtonVariant.outlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>
            <Button
              variant={ButtonVariant.outlined}
              disabled
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            >
              Попробовать снова
            </Button>

            <Button
              variant={ButtonVariant.outlined}
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
              variant={ButtonVariant.outlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
            <Button
              disabled
              variant={ButtonVariant.outlined}
              icon={<RefreshIcon className="w-6 h-6 inline stroke-current" />}
            />
          </div>
        </section>
      </div>
      <div className="pt-4" />
      <div className="grid grid-cols-3 gap-3 items-end">
        <div>
          <Input
            name="if1"
            placeholder="Макака с бананом в сша"
            className="w-full"
          />
        </div>
        <div>
          <Input
            name="if2"
            value="Макака с бананом в сша"
            placeholder="Макака с бананом в сша"
            className="w-full"
            error="Неверно указана почта"
          />
        </div>
        <div>
          <Input
            name="if3"
            labelText="H3 Опиши принт."
            placeholder="Макака с бананом в сша"
            className="w-full"
          />
        </div>
      </div>

      <div className="pt-4" />
      <div className="grid grid-cols-3 gap-3 items-end">
        <Textarea
          name="tf1"
          placeholder="Макака с бананом в сша"
          className="w-full"
        />
        <Textarea
          name="tf2"
          value="Макака с бананом в сша"
          placeholder="Макака с бананом в сша"
          error="Неверно указана почта"
        />
        <Textarea
          name="tf3"
          labelText="H3 Опиши принт."
          placeholder="Макака с бананом в сша"
        />
      </div>
    </main>
  );
}
