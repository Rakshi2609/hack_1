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
  Accordion,
  Rating,
  Paper,
  Divider,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import menuData from "./menu.json";

export default function CanteenPage() {
  return (
    <>
      <Navbar />
      <Container size="xl" py="xl">
        <Stack gap="xl">
          <div>
            <Title order={1}>Campus Canteens</Title>
            <Text c="dimmed" size="lg">
              Explore food options across campus
            </Text>
          </div>

          <Stack gap="xl">
            {menuData.map((canteen) => (
              <Card key={canteen.id} shadow="md" padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Group justify="space-between">
                    <div>
                      <Title order={2}>{canteen.name}</Title>
                      <Group gap="xs" mt={4}>
                        <IconMapPin size={16} />
                        <Text size="sm" c="dimmed">
                          {canteen.location}
                        </Text>
                      </Group>
                    </div>
                  </Group>

                  <Divider />

                  <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                    {canteen.items.map((item) => (
                      <Card key={item.id} shadow="sm" padding="md" radius="md" withBorder>
                        <Stack gap="sm">
                          <Group justify="space-between" align="flex-start">
                            <div>
                              <Text fw={600} size="md">
                                {item.name}
                              </Text>
                              <Group gap={4} mt={4}>
                                <Rating value={item.rating} fractions={2} readOnly size="xs" />
                                <Text size="xs" c="dimmed">
                                  ({item.rating})
                                </Text>
                              </Group>
                            </div>
                            <Badge color={item.available ? "green" : "red"} variant="light" size="sm">
                              {item.available ? "Available" : "Out"}
                            </Badge>
                          </Group>

                          <Text size="sm" c="dimmed">
                            {item.description}
                          </Text>

                          <Text size="lg" fw={700} c="blue">
                            ₹{item.price}
                          </Text>

                          {item.reviews && item.reviews.length > 0 && (
                            <Accordion variant="contained">
                              <Accordion.Item value="reviews">
                                <Accordion.Control>
                                  <Text size="sm" fw={500}>
                                    Reviews ({item.reviews.length})
                                  </Text>
                                </Accordion.Control>
                                <Accordion.Panel>
                                  <Stack gap="xs">
                                    {item.reviews.map((review, idx) => (
                                      <Paper key={idx} p="xs" withBorder>
                                        <Group justify="space-between">
                                          <Text size="xs" fw={600}>
                                            {review.user}
                                          </Text>
                                          <Rating value={review.rating} readOnly size="xs" />
                                        </Group>
                                        <Text size="xs" c="dimmed" mt={4}>
                                          {review.comment}
                                        </Text>
                                      </Paper>
                                    ))}
                                  </Stack>
                                </Accordion.Panel>
                              </Accordion.Item>
                            </Accordion>
                          )}
                        </Stack>
                      </Card>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
