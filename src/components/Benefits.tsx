import { Card, Flex, Typography, Button } from "@gustavobgt/godoc-ui";

const O_CLOCK_IMG_URL = "/images/oclock.png";
const LOYALTY_IMG_URL = "/images/loyalty.png";
const MEGAPHONE_IMG_URL = "/images/megaphone.png";
const OPTMIZATION_IMG_URL = "/images/optimization.png";

const benefitsCards = [
  {
    id: 1,
    image: O_CLOCK_IMG_URL,
    title: "Economize horas semanais",
    description:
      "45% a menos de ligações e até 40% de consultas confirmadas automaticamente.",
  },
  {
    id: 2,
    image: LOYALTY_IMG_URL,
    title: "Aumente a fidelização dos pacientes",
    description:
      "98% de satisfação dos pacientes. Menos faltas, mais consultas,	mais retornos.",
  },
  {
    id: 3,
    image: MEGAPHONE_IMG_URL,
    title: "Tenha estratégias de marketing efetivas",
    description:
      "Construa sua reputação online duas vezes mais rápidoe de forma simples.",
  },
  {
    id: 4,
    image: OPTMIZATION_IMG_URL,
    title: "Otimize o trabalho da recepção",
    description:
      "25% menos tarefas manuais. Fácil monitoramento e otimização do trabalho.",
  },
];

export const Benefits = () => {
  return (
    <>
      <Typography
        mt={8}
        color="primary"
        weight="medium"
        fontSize="6xl"
        lineHeight="6xl"
      >
        Vantagens
      </Typography>
      <Typography color="primary" fontSize="3xl" lineHeight="2xl">
        Soluções práticas para profissionais da saúde e controle total de seu
        negócio com alguns cliques!
      </Typography>

      <Flex justify="center" align="center" mt={5} gap="2.4rem" wrap="wrap">
        {benefitsCards.map(({ id, image, title, description }) => {
          return (
            <Card key={id} maxWidth="300px" elevation={0}>
              <Card.Body p={0}>
                <Flex justify="center">
                  <img src={image} />
                </Flex>

                <Typography
                  fontSize="xl"
                  lineHeight="xl"
                  color="primary"
                  weight="semibold"
                  mt={4}
                >
                  {title}
                </Typography>

                <Typography mt={1} color="primary" weight="light">
                  {description}
                </Typography>
              </Card.Body>

              <Card.Footer justify="center">
                <Button mt={5} color="secondary" variant="text">
                  Ver mais
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};
