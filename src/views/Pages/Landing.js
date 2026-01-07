/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import heroImage from "assets/img/signInImage.png";

const featureCards = [
  {
    title: "Canlı Tehdit Görünürlüğü",
    description:
      "IPS, anti-malware ve davranışsal analitiği tek akışta toplar, kritik alarmları öne çıkarır.",
  },
  {
    title: "Switch & Firewall Fabric",
    description:
      "Edge ve core cihazlarını tek panelde yönetir, politikaları bölgesel olarak otomatik dağıtır.",
  },
  {
    title: "Sıfır Güven Politikaları",
    description:
      "Kimlik, cihaz durumu ve uygulama riskine göre mikro-segmentasyon uygular.",
  },
];

const telemetryItems = [
  "Gerçek zamanlı oturum sayısı",
  "Doğrulanmış trafik hacmi",
  "Engellenen saldırı türleri",
  "Cihaz sıcaklık ve kaynak kullanımı",
  "WAN bağlantı kalitesi ve SLA",
  "Kural değişiklik geçmişi",
];

export default function Landing() {
  return (
    <Box px={{ base: "24px", md: "40px", xl: "80px" }} pb='80px'>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        gap='40px'
        pt={{ base: "120px", lg: "140px" }}>
        <Box maxW={{ base: "100%", lg: "520px" }}>
          <Badge colorScheme='purple' mb='18px' px='12px' py='6px' borderRadius='full'>
            ALLDATA Secure Cloud
          </Badge>
          <Heading color='white' fontSize={{ base: "32px", md: "44px" }} mb='20px'>
            Alldata cihaz kontrol paneli ile
            <Box as='span' color='purple.300'> canlı güvenliği</Box> yönetin.
          </Heading>
          <Text color='gray.400' fontSize='md' mb='28px'>
            Switch, firewall ve edge cihazlarınızı tek ekranda izleyin. Tüm telemetriyi canlı takip
            ederek Fortinet ve Cisco seviyesinde kurumsal görünürlük sağlayın.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing='12px'>
            <NavLink to='/auth/signin'>
              <Button variant='brand' size='lg'>
                Kontrol Paneline Gir
              </Button>
            </NavLink>
            <NavLink to='/admin/dashboard'>
              <Button variant='outline' colorScheme='whiteAlpha' size='lg'>
                Canlı Demo
              </Button>
            </NavLink>
          </Stack>
        </Box>
        <Box
          flex='1'
          w='100%'
          minH={{ base: "280px", md: "360px" }}
          borderRadius='24px'
          position='relative'
          overflow='hidden'
          bg='linear-gradient(135deg, rgba(88, 44, 255, 0.3), rgba(4, 12, 48, 0.9))'>
          <Box
            position='absolute'
            inset='0'
            bgImage={heroImage}
            bgSize='cover'
            bgPosition='center'
            opacity='0.25'
          />
          <Flex direction='column' position='relative' p={{ base: "24px", md: "32px" }} gap='16px'>
            <Text color='gray.300' fontSize='sm'>
              Live Security Snapshot
            </Text>
            <Heading color='white' fontSize='28px'>
              24 Bölge • 1.248 Aktif Cihaz
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap='16px'>
              {[
                { label: "Engellenen Tehdit", value: "8.4K" },
                { label: "Anlık Trafik", value: "42.8 Gbps" },
                { label: "Uptime", value: "%99.992" },
                { label: "Kritik Alarm", value: "12" },
              ].map((item) => (
                <Box
                  key={item.label}
                  p='16px'
                  borderRadius='16px'
                  bg='rgba(10, 14, 35, 0.65)'
                  border='1px solid'
                  borderColor='rgba(255,255,255,0.08)'>
                  <Text color='gray.400' fontSize='xs' mb='6px'>
                    {item.label}
                  </Text>
                  <Text color='white' fontSize='lg' fontWeight='bold'>
                    {item.value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing='24px' mt='80px' id='about'>
        {featureCards.map((card) => (
          <Box
            key={card.title}
            p='24px'
            borderRadius='20px'
            bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.7) 91.2%)'
            border='1px solid'
            borderColor='rgba(255,255,255,0.08)'>
            <Heading color='white' fontSize='lg' mb='12px'>
              {card.title}
            </Heading>
            <Text color='gray.400' fontSize='sm'>
              {card.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt='80px' id='security'>
        <Heading color='white' fontSize='28px' mb='16px'>
          Canlı Telemetri Akışı
        </Heading>
        <Text color='gray.400' maxW='720px' mb='24px'>
          Alldata paneli, cihaz sağlığından güvenlik olaylarına kadar tüm katmanları aynı anda izler.
          Operasyon ekipleri için tek merkezden anlık izleme sunar.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='14px'>
          {telemetryItems.map((item) => (
            <Flex
              key={item}
              align='center'
              p='14px'
              borderRadius='14px'
              bg='rgba(10, 14, 35, 0.6)'
              border='1px solid'
              borderColor='rgba(255,255,255,0.08)'>
              <Icon as={CheckIcon} color='green.300' w='14px' h='14px' me='12px' />
              <Text color='gray.200' fontSize='sm'>
                {item}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
