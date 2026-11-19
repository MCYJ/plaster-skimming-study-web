'use strict';
// Static website language only: no account, tracking, local storage, or remote API.
const english = {};
document.querySelectorAll('[data-i18n]').forEach(node => { english[node.dataset.i18n] = node.textContent.trim(); });
english.progressTitle = 'A record of review.\nNot a predicted grade.';
const korean = {
  skip:'본문으로 건너뛰기',eyebrow:'독립적으로 만든 미장 지식 학습',hero1:'미장 지식을,',hero2:'꾸준히 복습해요.',
  intro:'석고 미장(plaster skimming)의 일부 주제를 공부하기 위한 인출 연습입니다. 문제를 풀고 해설을 다시 읽으며, 학습 기록을 내 기기에 남길 수 있어요.',
  explore:'학습 내용 살펴보기 ↗',soon:'App Store · 출시 준비 중',release:'한 번의 유료 다운로드로 준비하고 있습니다. 정기구독이나 추가 앱 내 구매는 필요하지 않습니다.',
  heroFoot:'서면 지식을 공부하는 도구입니다. 실기 훈련과 평가는 별도로 진행해야 합니다.',
  overviewLabel:'학습 내용 설명 · 실제 앱 화면이 아닙니다',anchors:'원본 학습 항목',tasks:'인출 연습 과제',
  overviewBody:'원본 학습 항목 150개를 바탕으로 500개 복습 과제를 구성했습니다. 서로 다른 500개 실무 역량을 뜻하지 않습니다.',session:'독립 연습 세션의 문항 수 · 시간 제한 없음',
  band1:'직접 만든 문제와 해설',band2:'4단계 과정으로 보는 개념',band3:'내 기기의 학습 진도',
  topicsKicker:'같은 주제로 다시 돌아오는 학습 흐름',topicsTitle:'읽고, 떠올리고, 다시 살펴보기.',
  topicsBody:'NOCN Level 2 Certificate for Plaster Skimmer와 관련된 일부 주제를 학습합니다. 독립적으로 만든 학습 도우미이며, 공식 평가가 아닙니다.',
  f1Title:'차이를 살펴보는 문제.',f1Body:'준비 과정, 도구, 작업 방법과 마감 확인에 관한 지식을 직접 만든 문제와 해설로 복습해 보세요.',
  f2Title:'다시 볼 문제 남겨 두기.',f2Body:'학습 문제를 북마크하고 저장된 문제 목록에서 다시 열어 보세요. 해설이 필요할 때 돌아와 살펴볼 수 있어요.',
  f3Title:'과정을 그림으로 정리하기.',f3Body:'직접 만든 개념 수업에서 4단계 과정도를 통해 생각을 정리합니다. 학습 자료이며, 특정 현장의 작업 방법서가 아닙니다.',
  diagramKicker:'원본 개념 수업의 한 예',diagramTitle:'현장의 기준부터 확인하기.',
  diagramBody:'원본 개념 수업에 담긴 4단계 학습 도식입니다. 생각의 흐름을 설명하며, 앱 화면이나 특정 현장의 작업 지침이 아닙니다.',
  step1:'현재의 현장 안내',step2:'작업 지침',step3:'변경된 조건',step4:'승인된 변경 사항',
  diagramNote:'원본 개념 수업의 4단계입니다. 실제 작업과 현장별 지침은 별도로 확인해야 합니다.',
  progressKicker:'학습 진도는 내 기기 안에',progressTitle:'복습의 기록이지,\n예상 점수가 아닙니다.',
  progressBody:'앱을 다운로드한 뒤에는 내장 연습, 해설, 개념과 학습 진도를 오프라인으로 이용할 수 있습니다. 기록은 풀이한 문항을 나타내며, 실무 능력이나 예상 평가 결과를 뜻하지 않습니다.',
  progressCaution:'앱 다운로드·구매·업데이트와 외부 자료를 여는 기능에는 인터넷 연결이 필요합니다. 정식 훈련, 프로젝트, 포트폴리오 증빙과 평가는 별도입니다.',
  languageNote:'웹사이트: 영어·한국어. 앱 인터페이스: 영어. 여기의 이미지는 학습 내용을 설명하며, 실제 앱 화면이 아닙니다.',privacyLink:'앱 개인정보 안내 읽기 ↗',
  supportTitle:'이 앱에 관한 도움이 필요할 때.',supportBody:'Plaster Skimming Study 문의는 RushLabs 앱 지원 페이지의 연락 방법을 이용해 주세요. 이곳은 이 앱 전용 소개·지원 섹션입니다.',supportLink:'앱 지원 페이지 열기 ↗',
  independent:'RushLabs가 독립적으로 개발한 학습 앱입니다. NOCN, 정부 기관 또는 어떠한 자격 부여 기관과도 제휴하거나 승인을 받은 앱이 아닙니다. 지도하에 진행하는 실기 훈련과 공식 평가를 대체하지 않으며, 자격증을 발급하거나 평가 결과를 보장하지 않습니다.',privacy:'앱 개인정보 안내',supportShort:'지원'
};
function setLanguage(language) {
  const locale = language === 'ko' ? 'ko' : 'en';
  const copy = locale === 'ko' ? korean : english;
  document.documentElement.lang = locale;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = copy[node.dataset.i18n] || english[node.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(node => { node.setAttribute('aria-pressed',String(node.dataset.lang === locale)); });
  document.title = locale === 'ko' ? 'Plaster Skimming Study — 미장 지식을 차근차근 복습하기' : 'Plaster Skimming Study — Independent knowledge practice';
}
document.querySelectorAll('[data-lang]').forEach(button => { button.addEventListener('click',() => setLanguage(button.dataset.lang)); });
setLanguage(new URLSearchParams(location.search).get('lang'));
