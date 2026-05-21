import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
  Video,
} from 'lucide-react'
import './styles.css'

const site = {
  name: 'Henrique Ferreira',
  fullName: 'Henrique Ferreira',
  title: 'Psicólogo Clínico e Terapia ABA',
  crp: 'CRP 08/20243',
  phone: '(43) 99648-6906',
  whatsappNumber: '5543996486906',
  address: 'Rua Pará, 1753 - Centro. Londrina/PR',
}

const whatsappLink = (message) =>
  `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(message)}`

const whatsappWebLink = (message) =>
  `https://web.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(message)}`

const services = [
  'Psicoterapia para adolescentes e adultos',
  'Terapia ABA e acompanhamento de pessoas no TEA',
  'Orientação a pais e supervisão clínica',
]

const courses = [
  {
    type: 'Assessoria escolar',
    title: 'Inclusão escolar para casos típicos e atípicos',
    messageTitle: 'Assessoria escolar para inclusão',
    audience: 'Escolas, famílias e equipes pedagógicas',
    format: 'Projeto personalizado e acompanhamento continuado',
    description:
      'Apoio técnico para construir processos de escolarização mais inclusivos, articulando escola, família e rede de cuidado da criança ou adolescente.',
    highlights: [
      'Avaliação inicial do contexto escolar',
      'Projeto de inclusão e orientações práticas',
      'Apoio em PDIE, rotina visual e adaptações',
    ],
  },
  {
    type: 'Inclusão corporativa',
    title: 'Diversidade e acessibilidade no trabalho',
    messageTitle: 'Programa de inclusão social no mercado de trabalho',
    audience: 'Empresas, RH, gestores e equipes',
    format: 'Programa personalizado, formações e consultoria contínua',
    description:
      'Programa para apoiar empresas na construção de ambientes acessíveis, diversos e preparados para incluir pessoas com deficiência com qualidade.',
    highlights: [
      'Avaliação de acessibilidade e postos de trabalho',
      'Formações para equipes, gestores e colaboradores',
      'Projetos com RH para contratação e ambientação',
    ],
  },
  {
    type: 'Supervisão',
    title: <>Supervisão de casos <strong>típicos</strong> e <strong>atípicos</strong></>,
    messageTitle: 'Supervisão de casos Típicos e Atípicos',
    audience: 'Psicólogos e estudantes',
    format: 'Individual ou grupo pequeno',
    description:
      'Espaço técnico para discutir condução clínica, hipóteses de intervenção, manejo comportamental e tomada de decisão.',
  },
]

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <p>{course.type}</p>
      <h3>{course.title}</h3>
      {course.description && <p className="course-description">{course.description}</p>}
      {course.highlights && (
        <ul className="course-highlights">
          {course.highlights.map((highlight) => (
            <li key={highlight}>
              <Check size={16} /> {highlight}
            </li>
          ))}
        </ul>
      )}
      <dl>
        <div>
          <dt>Público</dt>
          <dd>{course.audience}</dd>
        </div>
        <div>
          <dt>Formato</dt>
          <dd>{course.format}</dd>
        </div>
      </dl>
      <a
        href={whatsappLink(`Olá, tenho interesse em ${course.messageTitle}. Pode me enviar mais informações?`)}
        target="_blank"
        rel="noreferrer"
      >
        Tenho interesse <ArrowUpRight size={17} />
      </a>
    </article>
  )
}

function App() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} /> Psicologia clínica e Terapia ABA
          </p>
          <h1>{site.fullName}</h1>
          <p className="lead">
            Atendimento ético, acolhedor e baseado em evidências para adolescentes,
            adultos, famílias e pessoas no espectro do autismo.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#agenda">
              Ver agenda <CalendarDays size={18} />
            </a>
            <a
              className="button secondary"
              href={whatsappLink('Olá, gostaria de falar com Henrique Ferreira.')}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <MessageCircle size={18} />
            </a>
          </div>
          <div className="signature-line" aria-hidden="true" />
        </div>

        <div className="hero-media">
          <img src="/henrique-ferreira.jpg" alt="Henrique Ferreira sorrindo" />
          <div className="hero-card" aria-label={`${site.crp} ${site.address}`}>
            <span className="brand-watermark" aria-hidden="true">HF</span>
            <strong>{site.crp}</strong>
            <span>{site.address}</span>
          </div>
        </div>
      </section>

      <section className="section intro" id="sobre">
        <div className="section-kicker">
          <p className="eyebrow">Apresentação</p>
          <h2>Psicologia com ciência, acolhimento e propósito.</h2>
        </div>
        <div className="intro-panel">
          <p>
            Psicólogo clínico com atuação em psicoterapia, Terapia ABA,
            orientação familiar e supervisão. A proposta é oferecer um espaço
            profissional, seguro e claro para compreender demandas, construir
            repertórios e acompanhar mudanças possíveis.
          </p>
          <ul className="check-list">
            {services.map((service) => (
              <li key={service}>
                <Check size={18} /> {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feature-band">
        <div>
          <p className="eyebrow">Abordagem</p>
          <h2>Um atendimento humano sem perder a precisão do método.</h2>
          <p>
            O processo terapêutico combina acolhimento, análise funcional,
            definição de objetivos e acompanhamento contínuo. Cada plano é
            organizado conforme a história, o contexto e as necessidades de quem
            busca atendimento.
          </p>
        </div>
      </section>

      <section className="section" id="formacao">
        <div className="section-heading">
          <p className="eyebrow">
            <GraduationCap size={16} /> Cursos, palestras e consultorias
          </p>
          <h2>Assessoria, consultoria e palestras</h2>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard course={course} key={course.messageTitle} />
          ))}
        </div>
      </section>

      <section className="section agenda" id="agenda">
        <div className="agenda-copy">
          <p className="eyebrow">
            <CalendarDays size={16} /> Agenda e contato
          </p>
          <h2>Solicite uma sessão, assessoria, consultoria ou palestra pelo WhatsApp.</h2>
          <p>
            Envie uma mensagem informando se você busca atendimento clínico,
            supervisão, assessoria escolar, consultoria para empresas ou
            palestra. A partir desse primeiro contato, combinamos disponibilidade,
            formato e próximos passos.
          </p>
          <div className="new-patient-window">
            <strong>Sessões clínicas para casos novos</strong>
            <span>Sábados · 8h às 12h</span>
          </div>
          <div className="contact-actions agenda-actions">
            <a
              className="button primary"
              href={whatsappWebLink('Olá, vim pelo site e gostaria de solicitar um horário ou conversar sobre assessoria, consultoria ou palestra.')}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp <MessageCircle size={18} />
            </a>
            <span>
              <Video size={17} /> Online
            </span>
            <span>
              <MapPin size={17} /> Londrina/PR
            </span>
          </div>
        </div>
      </section>

      <footer>
        <p>{site.name} - {site.crp}</p>
        <p>{site.phone} · {site.address}</p>
        <p>
          Dados enviados por WhatsApp ou agenda são usados apenas para contato,
          organização do atendimento e confirmação de pagamentos.
        </p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
