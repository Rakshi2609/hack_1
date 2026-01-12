"use client";

import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/components/AuthProvider";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  ThemeIcon,
  rem,
  Stack,
  Badge,
  Grid,
  Box,
  Divider,
  Paper,
  ActionIcon,
} from "@mantine/core";
import {
  IconSchool,
  IconUsers,
  IconTrophy,
  IconArrowRight,
  IconRocket,
  IconMessage,
  IconBolt,
  IconNotes,
  IconCheck,
  IconBrandGithub,
  IconBrandLinkedin,
  IconStar,
  IconSparkles,
  IconCode,
  IconBrain,
  IconHeart,
  IconChartLine,
  IconCoffee,
} from "@tabler/icons-react";
import classes from "./page.module.css";
import { getAuthHeaders } from "@/lib/api";

interface StatsData {
  users: number;
  resources: number;
  projects: number;
  discussions: number;
}

export default function Home() {
  const { user } = useAuth();
  const [stats, setStats] = React.useState<StatsData | null>(null);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/stats", { headers: getAuthHeaders() });
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        if (mounted) setStats(data);
      } catch (e) {
        console.error("Stats error:", e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box className={classes.hero}>
        <Container size="xl">
          <Grid align="center" gutter={50}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Badge
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "violet", to: "cyan", deg: 90 }}
                  leftSection={<IconSparkles size={16} />}
                  className={classes.badge}
                >
                  Your Campus Hub
                </Badge>

                <Title className={classes.heroTitle}>
                  Connect. Collaborate.
                  <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: "violet", to: "cyan", deg: 45 }}
                    inherit
                  >
                    {" "}
                    Create.
                  </Text>
                </Title>

                <Text size="xl" c="dimmed" className={classes.heroText}>
                  Join the ultimate platform for students. Share skills, build
                  projects, ace quizzes, and connect with peers—all in one place.
                </Text>

                <Group gap="md">
                  {!user ? (
                    <>
                      <Button
                        component={Link}
                        href="/signup"
                        size="lg"
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: "violet", to: "cyan", deg: 45 }}
                        rightSection={<IconArrowRight size={20} />}
                        className={classes.ctaButton}
                      >
                        Get Started Free
                      </Button>
                      <Button
                        component={Link}
                        href="/login"
                        size="lg"
                        radius="xl"
                        variant="light"
                      >
                        Sign In
                      </Button>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      href="/profile"
                      size="lg"
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: "violet", to: "cyan", deg: 45 }}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      Go to Dashboard
                    </Button>
                  )}
                </Group>

                <Group gap="xl" mt="md">
                  <Stack gap={0}>
                    <Text size="xl" fw={900} c="violet">
                      {stats?.users ? `${(stats.users / 1000).toFixed(1)}k+` : "1.2k+"}
                    </Text>
                    <Text size="sm" c="dimmed">
                      Students
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text size="xl" fw={900} c="cyan">
                      {stats?.projects ? `${stats.projects}+` : "90+"}
                    </Text>
                    <Text size="sm" c="dimmed">
                      Projects
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text size="xl" fw={900} c="pink">
                      {stats?.discussions ? `${stats.discussions}+` : "500+"}
                    </Text>
                    <Text size="sm" c="dimmed">
                      Discussions
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} visibleFrom="md">
              <Box className={classes.heroImage}>
                <Box className={classes.floatingCard} style={{ top: "10%", left: "0%" }}>
                  <Card shadow="lg" padding="md" radius="md">
                    <Group gap="sm">
                      <ThemeIcon size="lg" radius="md" variant="light" color="violet">
                        <IconCode size={20} />
                      </ThemeIcon>
                      <div>
                        <Text size="xs" c="dimmed">
                          New Skill
                        </Text>
                        <Text size="sm" fw={600}>
                          React Developer
                        </Text>
                      </div>
                    </Group>
                  </Card>
                </Box>

                <Box className={classes.floatingCard} style={{ top: "40%", right: "0%" }}>
                  <Card shadow="lg" padding="md" radius="md">
                    <Group gap="sm">
                      <ThemeIcon size="lg" radius="md" variant="light" color="cyan">
                        <IconTrophy size={20} />
                      </ThemeIcon>
                      <div>
                        <Text size="xs" c="dimmed">
                          Quiz Score
                        </Text>
                        <Text size="sm" fw={600}>
                          95/100 Points
                        </Text>
                      </div>
                    </Group>
                  </Card>
                </Box>

                <Box className={classes.floatingCard} style={{ bottom: "10%", left: "20%" }}>
                  <Card shadow="lg" padding="md" radius="md">
                    <Group gap="sm">
                      <ThemeIcon size="lg" radius="md" variant="light" color="pink">
                        <IconMessage size={20} />
                      </ThemeIcon>
                      <div>
                        <Text size="xs" c="dimmed">
                          New Message
                        </Text>
                        <Text size="sm" fw={600}>
                          Team Chat Active
                        </Text>
                      </div>
                    </Group>
                  </Card>
                </Box>

                <Box className={classes.heroCircle} />
                <Box className={classes.heroCircle2} />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box className={classes.section}>
        <Container size="xl">
          <Stack align="center" gap="md" mb={60}>
            <Badge size="lg" variant="dot" color="violet">
              Platform Features
            </Badge>
            <Title order={2} ta="center" className={classes.sectionTitle}>
              Everything You Need to Excel
            </Title>
            <Text size="lg" c="dimmed" ta="center" maw={600}>
              Powerful tools designed to enhance your college experience and help you achieve your goals
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            <FeatureCard
              icon={<IconSchool size={28} />}
              title="Skills Exchange"
              description="Learn and teach. Trade skills with peers and grow together."
              color="violet"
              href="/skills"
            />
            <FeatureCard
              icon={<IconRocket size={28} />}
              title="Projects"
              description="Collaborate on real projects and build your portfolio."
              color="blue"
              href="/projects"
            />
            <FeatureCard
              icon={<IconBrain size={28} />}
              title="Quizzes"
              description="Test your knowledge and compete on the leaderboard."
              color="cyan"
              href="/quizzes"
            />
            <FeatureCard
              icon={<IconUsers size={28} />}
              title="Discussions"
              description="Engage in meaningful conversations and get help."
              color="grape"
              href="/discussions"
            />
            <FeatureCard
              icon={<IconTrophy size={28} />}
              title="Events"
              description="Stay updated on hackathons, workshops, and more."
              color="orange"
              href="/events"
            />
            <FeatureCard
              icon={<IconMessage size={28} />}
              title="Real-time Chat"
              description="Connect instantly with peers and form study groups."
              color="indigo"
              href="/chat"
            />
            <FeatureCard
              icon={<IconCoffee size={28} />}
              title="Canteen"
              description="Browse menus, prices, and reviews from campus."
              color="teal"
              href="/canteen"
            />
            <FeatureCard
              icon={<IconChartLine size={28} />}
              title="Track Progress"
              description="Monitor your growth and achievements over time."
              color="pink"
              href="/profile"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box className={classes.sectionAlt}>
        <Container size="xl">
          <Grid gutter={50} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <SimpleGrid cols={2} spacing="lg">
                <Paper shadow="sm" p="xl" radius="md" className={classes.benefitCard}>
                  <ThemeIcon size={50} radius="md" variant="light" color="violet" mb="md">
                    <IconUsers size={28} />
                  </ThemeIcon>
                  <Text fw={700} size="lg" mb="xs">
                    Community Driven
                  </Text>
                  <Text size="sm" c="dimmed">
                    Built by students, for students. Your feedback shapes the platform.
                  </Text>
                </Paper>

                <Paper shadow="sm" p="xl" radius="md" className={classes.benefitCard}>
                  <ThemeIcon size={50} radius="md" variant="light" color="cyan" mb="md">
                    <IconBolt size={28} />
                  </ThemeIcon>
                  <Text fw={700} size="lg" mb="xs">
                    Lightning Fast
                  </Text>
                  <Text size="sm" c="dimmed">
                    Optimized performance for seamless real-time collaboration.
                  </Text>
                </Paper>

                <Paper shadow="sm" p="xl" radius="md" className={classes.benefitCard}>
                  <ThemeIcon size={50} radius="md" variant="light" color="pink" mb="md">
                    <IconHeart size={28} />
                  </ThemeIcon>
                  <Text fw={700} size="lg" mb="xs">
                    Safe & Inclusive
                  </Text>
                  <Text size="sm" c="dimmed">
                    Advanced moderation keeps the community respectful and productive.
                  </Text>
                </Paper>

                <Paper shadow="sm" p="xl" radius="md" className={classes.benefitCard}>
                  <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="md">
                    <IconStar size={28} />
                  </ThemeIcon>
                  <Text fw={700} size="lg" mb="xs">
                    Always Free
                  </Text>
                  <Text size="sm" c="dimmed">
                    Full access to all features. No hidden costs or premium tiers.
                  </Text>
                </Paper>
              </SimpleGrid>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Badge size="lg" variant="dot" color="cyan">
                  Why Choose Us
                </Badge>
                <Title order={2} className={classes.sectionTitle}>
                  More Than Just a Platform
                </Title>
                <Text size="lg" c="dimmed">
                  CollegeConnect is your digital campus companion. We understand the
                  challenges of college life and provide the tools you need to
                  succeed academically and socially.
                </Text>

                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon size="lg" radius="xl" variant="light" color="violet">
                      <IconCheck size={18} />
                    </ThemeIcon>
                    <Text>Collaborate on projects with talented peers</Text>
                  </Group>
                  <Group gap="sm">
                    <ThemeIcon size="lg" radius="xl" variant="light" color="cyan">
                      <IconCheck size={18} />
                    </ThemeIcon>
                    <Text>Access resources and get instant help</Text>
                  </Group>
                  <Group gap="sm">
                    <ThemeIcon size="lg" radius="xl" variant="light" color="pink">
                      <IconCheck size={18} />
                    </ThemeIcon>
                    <Text>Build your network and portfolio</Text>
                  </Group>
                  <Group gap="sm">
                    <ThemeIcon size="lg" radius="xl" variant="light" color="orange">
                      <IconCheck size={18} />
                    </ThemeIcon>
                    <Text>Stay updated on campus events and opportunities</Text>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className={classes.ctaSection}>
        <Container size="md">
          <Card className={classes.ctaCard} shadow="xl" padding={60} radius="xl">
            <Stack align="center" gap="xl">
              <ThemeIcon size={80} radius="xl" variant="gradient" gradient={{ from: "violet", to: "cyan", deg: 45 }}>
                <IconRocket size={40} />
              </ThemeIcon>

              <Stack align="center" gap="md">
                <Title order={2} ta="center">
                  Ready to Transform Your College Life?
                </Title>
                <Text size="lg" c="dimmed" ta="center" maw={500}>
                  Join thousands of students already making the most of their college experience.
                </Text>
              </Stack>

              <Group gap="md">
                {!user ? (
                  <>
                    <Button
                      component={Link}
                      href="/signup"
                      size="xl"
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: "violet", to: "cyan", deg: 45 }}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      Join Now - It's Free
                    </Button>
                    <Button
                      component={Link}
                      href="/skills"
                      size="xl"
                      radius="xl"
                      variant="default"
                    >
                      Explore Features
                    </Button>
                  </>
                ) : (
                  <Button
                    component={Link}
                    href="/profile"
                    size="xl"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "violet", to: "cyan", deg: 45 }}
                    rightSection={<IconArrowRight size={20} />}
                  >
                    Complete Your Profile
                  </Button>
                )}
              </Group>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* Footer */}
      <Box className={classes.footer}>
        <Container size="xl">
          <Grid gutter={50}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md">
                <Group gap={8}>
                  <IconSchool size={32} color="var(--mantine-color-violet-6)" />
                  <Text size="xl" fw={900} variant="gradient" gradient={{ from: "violet", to: "cyan", deg: 45 }}>
                    CollegeConnect
                  </Text>
                </Group>
                <Text size="sm" c="dimmed">
                  Empowering students to collaborate, learn, and grow together. Your ultimate campus companion.
                </Text>
                <Group gap="xs">
                  <ActionIcon size="lg" variant="subtle" color="gray" component={Link} href="https://github.com/Rakshi2609">
                    <IconBrandGithub size={20} />
                  </ActionIcon>
                  <ActionIcon size="lg" variant="subtle" color="gray" component={Link} href="https://www.linkedin.com/in/rakshithganjimut/">
                    <IconBrandLinkedin size={20} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 6, md: 2 }}>
              <Stack gap="sm">
                <Text fw={700} size="sm">Platform</Text>
                <Text component={Link} href="/skills" size="sm" c="dimmed" className={classes.footerLink}>Skills</Text>
                <Text component={Link} href="/projects" size="sm" c="dimmed" className={classes.footerLink}>Projects</Text>
                <Text component={Link} href="/discussions" size="sm" c="dimmed" className={classes.footerLink}>Discussions</Text>
                <Text component={Link} href="/quizzes" size="sm" c="dimmed" className={classes.footerLink}>Quizzes</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 6, md: 2 }}>
              <Stack gap="sm">
                <Text fw={700} size="sm">Community</Text>
                <Text component={Link} href="/events" size="sm" c="dimmed" className={classes.footerLink}>Events</Text>
                <Text component={Link} href="/chat" size="sm" c="dimmed" className={classes.footerLink}>Chat</Text>
                <Text component={Link} href="/canteen" size="sm" c="dimmed" className={classes.footerLink}>Canteen</Text>
                <Text component={Link} href="/users" size="sm" c="dimmed" className={classes.footerLink}>Users</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="sm">
                <Text fw={700} size="sm">Legal</Text>
                <Text component={Link} href="/privacy" size="sm" c="dimmed" className={classes.footerLink}>Privacy Policy</Text>
                <Text component={Link} href="/terms" size="sm" c="dimmed" className={classes.footerLink}>Terms of Service</Text>
                <Text component={Link} href="/guidelines" size="sm" c="dimmed" className={classes.footerLink}>Community Guidelines</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} CollegeConnect. Built with ❤️ for students.
            </Text>
            <Text size="sm" c="dimmed">
              Developed by MashDevelopers
            </Text>
          </Group>
        </Container>
      </Box>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href: string;
}) {
  return (
    <Card
      component={Link}
      href={href}
      className={classes.featureCard}
      shadow="sm"
      padding="xl"
      radius="md"
    >
      <Stack gap="md">
        <ThemeIcon size={60} radius="md" variant="light" color={color}>
          {icon}
        </ThemeIcon>
        <div>
          <Text fw={700} size="lg" mb="xs">
            {title}
          </Text>
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
            {description}
          </Text>
        </div>
      </Stack>
    </Card>
  );
}
