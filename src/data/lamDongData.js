export const lamDongData = [
  {
    id: 'da-lat',
    name: 'Thành phố Đà Lạt',
    description: 'Thành phố ngàn hoa với nhiều di tích lịch sử quan trọng',
    image: '/images/dalat-overview.jpg',
    coordinates: { lat: 11.9404, lng: 108.4583 },
    locations: [
      {
        id: 'dalat-palace',
        name: 'Dinh Bảo Đại',
        description: 'Cung điện mùa hè của vua Bảo Đại',
        image: '/images/bao-dai-palace.jpg',
        panoramaImage: '/images/bao-dai-360.jpg',
        coordinates: { lat: 11.9426, lng: 108.4419 },
        lesson: {
          id: 'bao-dai-lesson',
          title: 'Lịch sử Dinh Bảo Đại',
          content: [
            {
              type: 'text',
              content: 'Dinh Bảo Đại, còn được gọi là Dinh 3, là một trong những công trình kiến trúc độc đáo nhất tại Đà Lạt. Được xây dựng từ năm 1933 đến 1938, dinh là nơi nghỉ mát của Hoàng gia Việt Nam.'
            },
            {
              type: 'image',
              content: '/images/bao-dai-construction.jpg',
              caption: 'Quá trình xây dựng Dinh Bảo Đại'
            },
            {
              type: 'text',
              content: 'Kiến trúc của dinh kết hợp giữa phong cách Pháp và truyền thống Việt Nam, thể hiện sự giao thoa văn hóa đặc trưng của thời kỳ thuộc địa.'
            }
          ],
          images: [
            '/images/bao-dai-exterior.jpg',
            '/images/bao-dai-interior.jpg',
            '/images/bao-dai-garden.jpg'
          ],
          historicalSignificance: 'Dinh Bảo Đại là biểu tượng của thời kỳ cuối của chế độ phong kiến Việt Nam và sự hiện diện của Pháp tại Đông Dương.',
          characteristics: [
            'Kiến trúc Art Deco độc đáo',
            'Vị trí địa lý thuận lợi',
            'Nội thất xa hoa thời bấy giờ',
            'Vườn hoa đẹp quanh năm'
          ],
          timeline: [
            { year: '1933', event: 'Khởi công xây dựng' },
            { year: '1938', event: 'Hoàn thành xây dựng' },
            { year: '1945', event: 'Vua Bảo Đại thoái vị' },
            { year: '1975', event: 'Trở thành di tích lịch sử' }
          ]
        },
        quiz: {
          id: 'bao-dai-quiz',
          title: 'Kiểm tra kiến thức về Dinh Bảo Đại',
          questions: [
            {
              id: 'q1',
              question: 'Dinh Bảo Đại được xây dựng trong khoảng thời gian nào?',
              options: ['1930-1935', '1933-1938', '1935-1940', '1940-1945'],
              correctAnswer: 1,
              explanation: 'Dinh Bảo Đại được xây dựng từ năm 1933 đến năm 1938.'
            },
            {
              id: 'q2',
              question: 'Dinh Bảo Đại còn được gọi là gì?',
              options: ['Dinh 1', 'Dinh 2', 'Dinh 3', 'Dinh 4'],
              correctAnswer: 2,
              explanation: 'Dinh Bảo Đại còn được gọi là Dinh 3.'
            },
            {
              id: 'q3',
              question: 'Kiến trúc của dinh kết hợp phong cách nào?',
              options: ['Chỉ có phong cách Pháp', 'Chỉ có phong cách Việt Nam', 'Pháp và Việt Nam', 'Châu Âu và Châu Á'],
              correctAnswer: 2,
              explanation: 'Kiến trúc của dinh kết hợp giữa phong cách Pháp và truyền thống Việt Nam.'
            }
          ]
        }
      },
      {
        id: 'dalat-station',
        name: 'Ga Đà Lạt',
        description: 'Nhà ga xe lửa cổ kính của Đà Lạt',
        image: '/images/dalat-station.jpg',
        coordinates: { lat: 11.9377, lng: 108.4419 },
        lesson: {
          id: 'dalat-station-lesson',
          title: 'Lịch sử Ga Đà Lạt',
          content: [
            {
              type: 'text',
              content: 'Ga Đà Lạt được xây dựng vào năm 1938, là một phần của tuyến đường sắt răng cưa Thăng Tam - Đà Lạt dài 84km.'
            },
            {
              type: 'image',
              content: '/images/dalat-train-old.jpg',
              caption: 'Tàu hỏa Đà Lạt thời xưa'
            }
          ],
          images: ['/images/dalat-station-exterior.jpg'],
          historicalSignificance: 'Ga Đà Lạt là minh chứng cho sự phát triển giao thông vận tải thời Pháp thuộc.',
          characteristics: [
            'Kiến trúc Pháp cổ điển',
            'Đường sắt răng cưa độc đáo',
            'Phục vụ du lịch từ thời xưa'
          ],
          timeline: [
            { year: '1928', event: 'Bắt đầu xây dựng tuyến đường sắt' },
            { year: '1938', event: 'Ga Đà Lạt được khánh thành' },
            { year: '1964', event: 'Ngừng hoạt động do chiến tranh' },
            { year: '1991', event: 'Khôi phục phục vụ du lịch' }
          ]
        },
        quiz: {
          id: 'dalat-station-quiz',
          title: 'Kiểm tra kiến thức về Ga Đà Lạt',
          questions: [
            {
              id: 'q1',
              question: 'Ga Đà Lạt được xây dựng năm nào?',
              options: ['1935', '1938', '1940', '1942'],
              correctAnswer: 1,
              explanation: 'Ga Đà Lạt được xây dựng vào năm 1938.'
            },
            {
              id: 'q2',
              question: 'Tuyến đường sắt Thăng Tam - Đà Lạt dài bao nhiêu km?',
              options: ['80km', '84km', '88km', '90km'],
              correctAnswer: 1,
              explanation: 'Tuyến đường sắt Thăng Tam - Đà Lạt dài 84km.'
            }
          ]
        }
      },
      {
        id: 'xuan-huong-lake',
        name: 'Hồ Xuân Hương',
        description: 'Trái tim của thành phố Đà Lạt',
        image: '/images/xuan-huong-lake.jpg',
        coordinates: { lat: 11.9424, lng: 108.4356 },
        lesson: {
          id: 'xuan-huong-lesson',
          title: 'Lịch sử Hồ Xuân Hương',
          content: [
            {
              type: 'text',
              content: 'Hồ Xuân Hương được hình thành từ năm 1919 khi người Pháp xây đập chắn suối Cẩm Ly.'
            }
          ],
          images: ['/images/xuan-huong-old.jpg'],
          historicalSignificance: 'Hồ Xuân Hương là trung tâm của Đà Lạt từ thời Pháp thuộc.',
          characteristics: [
            'Hình dáng giống lưỡi liềm',
            'Xung quanh có nhiều công trình kiến trúc Pháp',
            'Là nơi tổ chức các sự kiện quan trọng'
          ],
          timeline: [
            { year: '1919', event: 'Bắt đầu xây đập chắn suối' },
            { year: '1923', event: 'Hồ hoàn thành' },
            { year: '1932', event: 'Được đặt tên theo thi sĩ Hồ Xuân Hương' }
          ]
        },
        quiz: {
          id: 'xuan-huong-quiz',
          title: 'Kiểm tra kiến thức về Hồ Xuân Hương',
          questions: [
            {
              id: 'q1',
              question: 'Hồ Xuân Hương được hình thành năm nào?',
              options: ['1917', '1919', '1921', '1923'],
              correctAnswer: 1,
              explanation: 'Hồ Xuân Hương được hình thành từ năm 1919.'
            }
          ]
        }
      },
      {
        id: 'langbiang-mountain',
        name: 'Núi Langbiang',
        description: 'Ngọn núi linh thiêng của người K\'Ho',
        image: '/images/langbiang.jpg',
        coordinates: { lat: 12.0421, lng: 108.4419 },
        lesson: {
          id: 'langbiang-lesson',
          title: 'Lịch sử Núi Langbiang',
          content: [
            {
              type: 'text',
              content: 'Núi Langbiang cao 2.167m, là ngọn núi cao nhất Lâm Đồng. Tên gọi bắt nguồn từ truyền thuyết tình yêu của đôi trẻ K\'Lang và H\'Biang.'
            }
          ],
          images: ['/images/langbiang-peak.jpg'],
          historicalSignificance: 'Núi Langbiang là biểu tượng văn hóa của người K\'Ho và là cội nguồn tên gọi Lâm Đồng.',
          characteristics: [
            'Cao nhất Lâm Đồng',
            'Gắn với truyền thuyết dân gian',
            'Nơi sinh sống của người K\'Ho'
          ],
          timeline: [
            { year: 'Thời xa xưa', event: 'Người K\'Ho sinh sống' },
            { year: '1893', event: 'Người Pháp khám phá' },
            { year: '1900', event: 'Bắt đầu phát triển du lịch' }
          ]
        },
        quiz: {
          id: 'langbiang-quiz',
          title: 'Kiểm tra kiến thức về Núi Langbiang',
          questions: [
            {
              id: 'q1',
              question: 'Núi Langbiang cao bao nhiêu mét?',
              options: ['2.100m', '2.167m', '2.200m', '2.250m'],
              correctAnswer: 1,
              explanation: 'Núi Langbiang cao 2.167m.'
            }
          ]
        }
      },
      {
        id: 'valley-of-love',
        name: 'Thung lũng Tình yêu',
        description: 'Thung lũng lãng mạn nhất Đà Lạt',
        image: '/images/valley-of-love.jpg',
        coordinates: { lat: 11.9733, lng: 108.4419 },
        lesson: {
          id: 'valley-lesson',
          title: 'Lịch sử Thung lũng Tình yêu',
          content: [
            {
              type: 'text',
              content: 'Thung lũng Tình yêu được hình thành từ năm 1972, ban đầu mang tên Thung lũng D\'Amour.'
            }
          ],
          images: ['/images/valley-old.jpg'],
          historicalSignificance: 'Thung lũng Tình yêu là điểm hẹn hò nổi tiếng từ thời Pháp thuộc.',
          characteristics: [
            'Cảnh quan thiên nhiên tuyệt đẹp',
            'Nơi hẹn hò của các cặp đôi',
            'Có nhiều hoạt động giải trí'
          ],
          timeline: [
            { year: '1930s', event: 'Người Pháp phát hiện' },
            { year: '1972', event: 'Chính thức mang tên Thung lũng Tình yêu' },
            { year: '1990s', event: 'Phát triển thành khu du lịch' }
          ]
        },
        quiz: {
          id: 'valley-quiz',
          title: 'Kiểm tra kiến thức về Thung lũng Tình yêu',
          questions: [
            {
              id: 'q1',
              question: 'Thung lũng Tình yêu được đặt tên chính thức năm nào?',
              options: ['1970', '1972', '1975', '1980'],
              correctAnswer: 1,
              explanation: 'Thung lũng Tình yêu được đặt tên chính thức năm 1972.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'bao-loc',
    name: 'Thành phố Bảo Lộc',
    description: 'Thành phố trà và tơ tằm',
    image: '/images/bao-loc-overview.jpg',
    coordinates: { lat: 11.5449, lng: 107.8034 },
    locations: [
      {
        id: 'bao-loc-tea',
        name: 'Đồi chè Bảo Lộc',
        description: 'Cái nôi của ngành trồng trà Việt Nam',
        image: '/images/bao-loc-tea.jpg',
        coordinates: { lat: 11.5449, lng: 107.8034 },
        lesson: {
          id: 'tea-lesson',
          title: 'Lịch sử trồng trà Bảo Lộc',
          content: [
            {
              type: 'text',
              content: 'Trà Bảo Lộc được trồng từ năm 1920 bởi người Pháp, trở thành một trong những vùng trà lớn nhất Việt Nam.'
            }
          ],
          images: ['/images/tea-plantation.jpg'],
          historicalSignificance: 'Bảo Lộc là nơi khởi nguồn ngành trà hiện đại ở Việt Nam.',
          characteristics: [
            'Khí hậu phù hợp trồng trà',
            'Kỹ thuật trồng từ Pháp',
            'Chất lượng trà cao'
          ],
          timeline: [
            { year: '1920', event: 'Người Pháp bắt đầu trồng trà' },
            { year: '1930', event: 'Mở rộng diện tích trồng' },
            { year: '1954', event: 'Việt Nam tiếp quản' }
          ]
        },
        quiz: {
          id: 'tea-quiz',
          title: 'Kiểm tra kiến thức về trà Bảo Lộc',
          questions: [
            {
              id: 'q1',
              question: 'Trà Bảo Lộc bắt đầu được trồng năm nào?',
              options: ['1918', '1920', '1922', '1925'],
              correctAnswer: 1,
              explanation: 'Trà Bảo Lộc được trồng từ năm 1920.'
            }
          ]
        }
      },
      {
        id: 'dray-nur-falls',
        name: 'Thác Dray Nur',
        description: 'Thác nước hùng vĩ nhất Lâm Đồng',
        image: '/images/dray-nur.jpg',
        coordinates: { lat: 11.5877, lng: 107.8034 },
        lesson: {
          id: 'dray-nur-lesson',
          title: 'Lịch sử Thác Dray Nur',
          content: [
            {
              type: 'text',
              content: 'Thác Dray Nur được phát hiện bởi thổ dân địa phương và sau đó được người Pháp ghi nhận.'
            }
          ],
          images: ['/images/dray-nur-full.jpg'],
          historicalSignificance: 'Thác Dray Nur là biểu tượng thiên nhiên hùng vĩ của Lâm Đồng.',
          characteristics: [
            'Cao 30m, rộng 100m',
            'Nước chảy quanh năm',
            'Cảnh quan thiên nhiên tuyệt đẹp'
          ],
          timeline: [
            { year: 'Thời cổ đại', event: 'Thổ dân phát hiện' },
            { year: '1900s', event: 'Người Pháp ghi nhận' },
            { year: '1990s', event: 'Phát triển du lịch' }
          ]
        },
        quiz: {
          id: 'dray-nur-quiz',
          title: 'Kiểm tra kiến thức về Thác Dray Nur',
          questions: [
            {
              id: 'q1',
              question: 'Thác Dray Nur cao khoảng bao nhiêu mét?',
              options: ['25m', '30m', '35m', '40m'],
              correctAnswer: 1,
              explanation: 'Thác Dray Nur cao khoảng 30m.'
            }
          ]
        }
      },
      {
        id: 'loc-chau-market',
        name: 'Chợ Lộc Châu',
        description: 'Chợ truyền thống của vùng cao nguyên',
        image: '/images/loc-chau-market.jpg',
        coordinates: { lat: 11.5300, lng: 107.7900 },
        lesson: {
          id: 'market-lesson',
          title: 'Lịch sử Chợ Lộc Châu',
          content: [
            {
              type: 'text',
              content: 'Chợ Lộc Châu hình thành từ đầu thế kỷ 20, là trung tâm buôn bán của vùng.'
            }
          ],
          images: ['/images/market-old.jpg'],
          historicalSignificance: 'Chợ Lộc Châu là trung tâm thương mại quan trọng của vùng cao nguyên.',
          characteristics: [
            'Kiến trúc truyền thống',
            'Đa dạng hàng hóa địa phương',
            'Nơi giao lưu văn hóa'
          ],
          timeline: [
            { year: '1910s', event: 'Bắt đầu hình thành' },
            { year: '1930s', event: 'Trở thành chợ chính thức' },
            { year: '2000s', event: 'Cải tạo và hiện đại hóa' }
          ]
        },
        quiz: {
          id: 'market-quiz',
          title: 'Kiểm tra kiến thức về Chợ Lộc Châu',
          questions: [
            {
              id: 'q1',
              question: 'Chợ Lộc Châu hình thành từ thế kỷ nào?',
              options: ['Thế kỷ 19', 'Đầu thế kỷ 20', 'Giữa thế kỷ 20', 'Cuối thế kỷ 20'],
              correctAnswer: 1,
              explanation: 'Chợ Lộc Châu hình thành từ đầu thế kỷ 20.'
            }
          ]
        }
      },
      {
        id: 'bao-loc-silk',
        name: 'Làng tơ tằm Bảo Lộc',
        description: 'Cái nôi ngành tơ tằm Việt Nam',
        image: '/images/silk-village.jpg',
        coordinates: { lat: 11.5200, lng: 107.8100 },
        lesson: {
          id: 'silk-lesson',
          title: 'Lịch sử ngành tơ tằm Bảo Lộc',
          content: [
            {
              type: 'text',
              content: 'Ngành tơ tằm Bảo Lộc được phát triển từ những năm 1920 bởi người Pháp.'
            }
          ],
          images: ['/images/silk-making.jpg'],
          historicalSignificance: 'Bảo Lộc là trung tâm tơ tằm lớn nhất Việt Nam.',
          characteristics: [
            'Kỹ thuật hiện đại từ Pháp',
            'Chất lượng tơ cao',
            'Truyền thống thủ công'
          ],
          timeline: [
            { year: '1920s', event: 'Bắt đầu nuôi tằm' },
            { year: '1950s', event: 'Phát triển quy mô lớn' },
            { year: '1990s', event: 'Hiện đại hóa kỹ thuật' }
          ]
        },
        quiz: {
          id: 'silk-quiz',
          title: 'Kiểm tra kiến thức về tơ tằm Bảo Lộc',
          questions: [
            {
              id: 'q1',
              question: 'Ngành tơ tằm Bảo Lộc được phát triển từ thập niên nào?',
              options: ['1910s', '1920s', '1930s', '1940s'],
              correctAnswer: 1,
              explanation: 'Ngành tơ tằm Bảo Lộc được phát triển từ những năm 1920.'
            }
          ]
        }
      },
      {
        id: 'bao-loc-cathedral',
        name: 'Nhà thờ Bảo Lộc',
        description: 'Công trình kiến trúc tôn giáo đặc sắc',
        image: '/images/cathedral.jpg',
        coordinates: { lat: 11.5450, lng: 107.8050 },
        lesson: {
          id: 'cathedral-lesson',
          title: 'Lịch sử Nhà thờ Bảo Lộc',
          content: [
            {
              type: 'text',
              content: 'Nhà thờ Bảo Lộc được xây dựng vào những năm 1930 bởi các giáo sĩ Pháp.'
            }
          ],
          images: ['/images/cathedral-interior.jpg'],
          historicalSignificance: 'Nhà thờ Bảo Lộc là trung tâm tôn giáo quan trọng của vùng.',
          characteristics: [
            'Kiến trúc Gothic',
            'Nghệ thuật trang trí tinh xảo',
            'Trung tâm cộng đồng Công giáo'
          ],
          timeline: [
            { year: '1930s', event: 'Bắt đầu xây dựng' },
            { year: '1940s', event: 'Hoàn thành' },
            { year: '1975', event: 'Tiếp tục hoạt động tôn giáo' }
          ]
        },
        quiz: {
          id: 'cathedral-quiz',
          title: 'Kiểm tra kiến thức về Nhà thờ Bảo Lộc',
          questions: [
            {
              id: 'q1',
              question: 'Nhà thờ Bảo Lộc được xây dựng vào thập niên nào?',
              options: ['1920s', '1930s', '1940s', '1950s'],
              correctAnswer: 1,
              explanation: 'Nhà thờ Bảo Lộc được xây dựng vào những năm 1930.'
            }
          ]
        }
      }
    ]
  }
];
