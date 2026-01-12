"use client";

import { Navbar } from "@/components/Navbar";
import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Badge,
  Stack,
  SimpleGrid,
  Button,
  Progress,
  ThemeIcon,
} from "@mantine/core";
import {
  IconClock,
  IconTrophy,
  IconBrain,
  IconChevronRight,
} from "@tabler/icons-react";
import quizzesData from "./quizzes.json";

export default function QuizzesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "green";
      case "medium":
        return "yellow";
      case "hard":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <>
      <Navbar />
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <div>
            <Title order={1}>Interactive Quizzes</Title>
            <Text c="dimmed" size="lg">
              Test your knowledge and climb the leaderboard
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {quizzesData.map((quiz) => (
              <Card
                key={quiz.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: "100%" }}
              >
                <Stack gap="md" style={{ height: "100%" }}>
                  <Group justify="space-between" align="flex-start">
                    <ThemeIcon size="xl" radius="md" variant="light" color="blue">
                      <IconBrain size={24} />
                    </ThemeIcon>
                    <Badge
                      color={getDifficultyColor(quiz.difficulty)}
                      variant="light"
                    >
                      {quiz.difficulty}
                    </Badge>
                  </Group>

                  <div>
                    <Title order={3} size="h4" mb="xs">
                      {quiz.title}
                    </Title>
                    <Text size="sm" c="dimmed" lineClamp={2}>
                      {quiz.description}
                    </Text>
                  </div>

                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Group gap="xs">
                        <IconClock size={16} />
                        <Text size="sm">{quiz.timeLimit} mins</Text>
                      </Group>
                      <Group gap="xs">
                        <IconTrophy size={16} />
                        <Text size="sm">{quiz.points} pts</Text>
                      </Group>
                    </Group>

                    <Progress
                      value={0}
                      size="sm"
                      radius="xl"
                      color="blue"
                      striped
                      animated={false}
                    />
                    <Text size="xs" c="dimmed">
                      {quiz.questions} Questions
                    </Text>
                  </Stack>

                  <Group gap="xs" mt="xs">
                    {quiz.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} size="xs" variant="dot" color="gray">
                        {tag}
                      </Badge>
                    ))}
                  </Group>

                  <Button
                    variant="light"
                    fullWidth
                    mt="auto"
                    rightSection={<IconChevronRight size={16} />}
                  >
                    Start Quiz
                  </Button>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>

          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Stack align="center" gap="md" ta="center">
              <ThemeIcon size={60} radius="xl" variant="light" color="blue">
                <IconTrophy size={32} />
              </ThemeIcon>
              <div>
                <Title order={2} size="h3">
                  Leaderboard Coming Soon!
                </Title>
                <Text c="dimmed" mt="xs">
                  Compete with peers and see who tops the charts
                </Text>
              </div>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
