import Button, { ButtonVariant } from "@/components/Button";
import ImageCard, { mockDataImageCard } from "@/components/Card/ImageCard";
import TextCard from "@/components/Card/TextCard";
import Chip, { ChipSize, ChipVariant } from "@/components/Chip";
import RefreshIcon from "@/components/Icons/Refresh";
import Input from "@/components/TextField/Input";
import Textarea from "@/components/TextField/Textarea";
import H2 from "@/components/Typhography/H2";
import H3 from "@/components/Typhography/H3";
import H4 from "@/components/Typhography/H4";
import Paragraph from "@/components/Typhography/Paragraph";
import Text, { TextVariant } from "@/components/Typhography/Text";

export default function Home() {
  return (
    <main className="p-6">
      <div className="grid gap-6">
        <h2 className="text-3xl">Button</h2>
        <hr />
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
      <div className="pt-8" />
      <h2 className="text-3xl">Text Field</h2>
      <div className="pt-4" />
      <hr />
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
            defaultValue="Макака с бананом в сша"
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
          defaultValue="Макака с бананом в сша"
          placeholder="Макака с бананом в сша"
          error="Неверно указана почта"
        />
        <Textarea
          name="tf3"
          labelText="H3 Опиши принт."
          placeholder="Макака с бананом в сша"
        />
      </div>
      <div className="pt-8" />
      <h2 className="text-3xl">Typhography</h2>
      <div className="pt-4" />
      <hr />
      <div className="pt-4" />
      <H2>h2- Макака с бананом в сша</H2>
      <H3>h3- Макака с бананом в сша</H3>
      <H4>h4- Макака с бананом в сша</H4>
      <Paragraph>
        <Text variant={TextVariant.body2}>
          Prosto One Regular 17 | Макака с бананом в сша с банданой на голове в
          уникальном стиле
        </Text>
      </Paragraph>
      <Paragraph className="mt-4">
        <Text variant={TextVariant.body1}>
          SF Regular 19 | В Москве и 60 других крупных городах России вы
          получите свой заказ уже через 7 дней после оплаты! Более подробную
          информацию об условиях доставки в ваш город можно найти здесь.
        </Text>
      </Paragraph>

      <Paragraph className="mt-4">
        <Text variant={TextVariant.body3}>
          SF Regular 17 | В Москве и 60 других крупных городах России вы
          получите свой заказ уже через 7 дней после оплаты! Более подробную
          информацию об условиях доставки в ваш город можно найти здесь.
        </Text>
      </Paragraph>
      <Paragraph className="mt-4">
        <Text variant={TextVariant.body4}>
          SF Regular 16 | В Москве и 60 других крупных городах России вы
          получите свой заказ уже через 7 дней после оплаты! Более подробную
          информацию об условиях доставки в ваш город можно найти здесь.
        </Text>
      </Paragraph>

      <div className="pt-8" />
      <h2 className="text-3xl">Chip</h2>
      <div className="pt-4" />
      <hr />
      <div className="pt-4" />
      <div className="flex items-start space-x-4">
        <Chip variant={ChipVariant.light} size={ChipSize.small}>
          СКОРО
        </Chip>

        <Chip variant={ChipVariant.light} size={ChipSize.base}>
          СКОРО
        </Chip>
        <Chip variant={ChipVariant.dark} size={ChipSize.small}>
          Принято в производство
        </Chip>
        <Chip variant={ChipVariant.dark} size={ChipSize.base}>
          Принято в производство
        </Chip>
        <Chip variant={ChipVariant.yellow} size={ChipSize.small}>
          ПРОДАНО
        </Chip>
        <Chip variant={ChipVariant.yellow} size={ChipSize.base}>
          ПРОДАНО
        </Chip>
        <Chip variant={ChipVariant.blue} size={ChipSize.small}>
          NFT
        </Chip>
        <Chip variant={ChipVariant.blue} size={ChipSize.base}>
          NFT
        </Chip>
      </div>

      <div className="pt-8" />
      <h2 className="text-3xl">Card</h2>
      <div className="pt-4" />
      <hr />
      <div className="pt-4" />
      <div className="flex items-start space-x-4">
        <TextCard
          title="О том что мы делаем"
          description="Задача организации, в особенности
          же реализация намеченных плановых
          заданий влечет за собой процесс
          внедрения и модернизации
          соответствующий условий активизации."
          actionText="Подробнее"
          className="w-[355px]"
        />

        <TextCard
          description="Задача организации, в особенности
          же реализация намеченных плановых
          заданий влечет за собой процесс
          внедрения и модернизации
          соответствующий условий активизации."
          className="w-[355px]"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <ImageCard {...mockDataImageCard[0]} />
        <ImageCard {...mockDataImageCard[1]} />
        <ImageCard {...mockDataImageCard[2]} />
      </div>
    </main>
  );
}
