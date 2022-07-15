import { gql, useQuery } from '@apollo/client';
import { StaticImageData } from 'next/image';
import { projectImg } from './images';

export type ProjectInfo = {
  title: string;
  content: string;
  techStack: string[];
  part: string[];

  img: StaticImageData;
};

export const projects: ProjectInfo[] = [
  {
    title: 'CAPS(졸업 작품)',
    content: 'YOLOv2를 이용한 차량 번호판 검출 시스템',
    techStack: ['python', 'YOLOv2', 'GoogleVision'],
    part: ['Leader', 'Machine Learning'],
    img: projectImg.caps,
  },
  {
    title: '철거 중계 플랫폼',
    content: '철거 및  공사 관련 업체 비교견적 어플',
    techStack: ['graphql', 'prisma', 'aws'],
    part: ['백엔드 개발'],
    img: projectImg.demolition,
  },
  {
    title: '주문 케이크 플랫폼',
    content: '주문 케이크 제작 전문점의 주문 및 예약 시스템의 불편성을 겨냥한 주문 제작 플랫폼',
    techStack: ['graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.cake,
  },
  {
    title: '태블릿 포스기',
    content: '태블릿 및 휴대폰을 통해 매장 내의 주문 및 포장, 예약 등을 관리하는 올인원 플랫폼',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.tablet,
  },
  {
    title: '책을 통한 소개팅 플랫폼',
    content: '서로 관심있는 책을 매개체로 이성간의 소통하는 플랫폼',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.book,
  },
  {
    title: '신속 항원 키드 검사 앱',
    content: '머신러닝을 이용한 신속한원 키트 이미지 분석으로 확진 여부 판단 앱 (머신러닝: 외주)',
    techStack: ['Flask', 'python', 'Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.covid,
  },
  {
    title: '장기 렌트 플랫폼',
    content: '장기렌트의 A to Z를 관리하는 플랫폼',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.car,
  },
  {
    title: '구인 구직 플랫폼',
    content: '위치기반 구인, 구직을 지원하는 플랫폼',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.phone,
  },
  {
    title: '라인더 모임 매칭 플랫폼',
    content: '라이더들만의 특별한 커뮤니티',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', ' 백엔드개발'],
    img: projectImg.phone,
  },
  {
    title: '약국 처방 픽업 플랫폼',
    content: '약국 처방 픽업 및 복약 관리 플랫폼',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', '백엔드개발'],
    img: projectImg.phone,
  },
  {
    title: '행사 QR 출입 관리',
    content: '행사를 진행함에 있어 참가자들의 모든 출입을 관리하는 시스템',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['디비 설계', '서버 구축', '백엔드개발'],
    img: projectImg.phone,
  },
  {
    title: 'PLC 제어',
    content: 'PLC 제어 및 Gateay 및 Middleware 구축',
    techStack: ['Graphql', 'prisma', 'aws'],
    part: ['서버 구축', '백엔드개발'],
    img: projectImg.phone,
  },
];
