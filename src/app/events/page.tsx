"use client";

import { Navbar } from '@/components/Navbar';
import { Container, Title, Text, Card, Group, Badge, Stack, SimpleGrid } from '@mantine/core';
import { IconCalendar, IconMapPin } from '@tabler/icons-react';
import eventsData from './events.json';

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <Container size="lg" py="xl">
                <Stack gap="xl">
                    <div>
                        <Title order={1}>Campus Events</Title>
                        <Text c="dimmed" size="lg">Upcoming events and activities</Text>
                    </div>

                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                        {eventsData.map((event) => (
                            <Card key={event.id} shadow="sm" padding="lg" radius="md" withBorder>
                                <Stack gap="md">
                                    <Title order={3}>{event.title}</Title>
                                    
                                    <Group gap="md">
                                        <Group gap="xs">
                                            <IconCalendar size={16} />
                                            <Text size="sm" c="dimmed">
                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </Text>
                                        </Group>
                                        <Group gap="xs">
                                            <IconMapPin size={16} />
                                            <Text size="sm" c="dimmed">{event.location}</Text>
                                        </Group>
                                    </Group>

                                    <Text size="sm">{event.description}</Text>

                                    <Group gap="xs">
                                        {event.tags.map((tag, idx) => (
                                            <Badge key={idx} variant="light" color="blue">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Group>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </>
    );
}
