// LazyFisher official game data extracted from get_game_data on 2026-05-07.
// Source: https://lazyfisher.toogle.club/help and authenticated WebSocket action get_game_data.
window.LAZYFISHER_GAME_DATA = {
  "version": "1778060747",
  "regions": [
    {
      "id": "pond_village",
      "name": "青溪镇·村边鱼塘",
      "description": "青溪镇外的浅水鱼塘，水草多、鱼体温和，是最安全的新手钓点。",
      "water_type": "freshwater",
      "depth_min": 0.4,
      "depth_max": 1.6,
      "cast_expectation_offset": -1.6,
      "travel_time_minutes": 5,
      "license_required": null,
      "level_required": 1,
      "soft_limit_kg": 1,
      "fish_pool": [
        {
          "fish_id": "young_crucian_carp",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_gudgeon",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.024,
          "size_modifier": 1
        },
        {
          "fish_id": "bitterling",
          "base_ratio": 0.018,
          "size_modifier": 1
        },
        {
          "fish_id": "medaka",
          "base_ratio": 0.009,
          "size_modifier": 1
        },
        {
          "fish_id": "mosquitofish",
          "base_ratio": 0.008,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.05,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.02
        },
        {
          "id": "structure_shadow",
          "name": "水草阴影",
          "depth_bias": 0.9,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.04
        }
      ],
      "environment_baseline": {
        "wind": 0.8,
        "cloud": 2,
        "rain": 0,
        "water_flow": 0.05
      },
      "recommended_styles": [
        "hand_rod"
      ],
      "guide": "先用手竿学会调浮漂深度，鱼讯稳定后再考虑更长的竿子。"
    },
    {
      "id": "river_lower",
      "name": "江陵县·乌沙下游河道",
      "description": "乌沙河下游缓流段，桥墩和弯道形成稳定藏鱼点。",
      "water_type": "freshwater",
      "depth_min": 0.5,
      "depth_max": 4,
      "cast_expectation_offset": 0.4,
      "travel_time_minutes": 15,
      "license_required": null,
      "level_required": 2,
      "soft_limit_kg": 3,
      "fish_pool": [
        {
          "fish_id": "crucian_carp",
          "base_ratio": 0.19,
          "size_modifier": 0.88
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_crucian_carp",
          "base_ratio": 0.16,
          "size_modifier": 0.9
        },
        {
          "fish_id": "barbel_chub",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "gudgeon",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "bitterling",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "japanese_eel",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "mud_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "tench",
          "base_ratio": 0.07,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 1.5,
        "cloud": 3,
        "rain": 0,
        "water_flow": 0.4
      },
      "recommended_styles": [
        "hand_rod",
        "match_rod",
        "lure_rod"
      ],
      "guide": "缓坡和回流位适合手竿与赛竿，桥墩暗流更适合轻路亚搜索。"
    },
    {
      "id": "lake_reed",
      "name": "白鹭湖·芦苇浅湾",
      "description": "白鹭湖东北侧的芦苇浅湾，草区鱼类活跃，适合进阶手竿。",
      "water_type": "freshwater",
      "depth_min": 0.8,
      "depth_max": 5,
      "cast_expectation_offset": 0.9,
      "travel_time_minutes": 25,
      "license_required": "freshwater_basic",
      "level_required": 3,
      "soft_limit_kg": 5,
      "fish_pool": [
        {
          "fish_id": "crucian_carp",
          "base_ratio": 0.12,
          "size_modifier": 0.94
        },
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.09,
          "size_modifier": 0.88
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_snakehead",
          "base_ratio": 0.04,
          "size_modifier": 0.82
        },
        {
          "fish_id": "silver_crucian_carp",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "bitterling",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "snakehead_murrel",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_gudgeon",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "barbel_chub",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "bluegill",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "mud_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "wuchang_bream",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "tench",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_perch",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "eurasian_perch",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "pumpkinseed",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "redear_sunfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "spotted_gar",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 1,
        "cloud": 4,
        "rain": 0,
        "water_flow": 0.1
      },
      "recommended_styles": [
        "hand_rod",
        "match_rod"
      ],
      "guide": "草边用手竿守窗口最稳，追表层掠食鱼时再换轻量路亚。"
    },
    {
      "id": "urban_canal",
      "name": "临川市·旧城运河",
      "description": "临川旧城里的人工运河，水体较浅，杂食性鱼类密度高。",
      "water_type": "freshwater",
      "depth_min": 0.6,
      "depth_max": 3.2,
      "cast_expectation_offset": -0.2,
      "travel_time_minutes": 20,
      "license_required": "freshwater_basic",
      "level_required": 4,
      "soft_limit_kg": 5,
      "fish_pool": [
        {
          "fish_id": "crucian_carp",
          "base_ratio": 0.16,
          "size_modifier": 1
        },
        {
          "fish_id": "tilapia",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_crucian_carp",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "barbel_chub",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "gudgeon",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_gudgeon",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "medaka",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "mosquitofish",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "snakehead_murrel",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "bluegill",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "tench",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "pumpkinseed",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "redear_sunfish",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "channel_catfish",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "clown_knifefish",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 0.6,
        "cloud": 4.5,
        "rain": 0,
        "water_flow": 0.2
      },
      "recommended_styles": [
        "hand_rod",
        "match_rod"
      ],
      "guide": "短手竿清桥洞和靠墙点位最直接，赛竿适合连续扫线。"
    },
    {
      "id": "river_mountain",
      "name": "雾岭山·溪流石滩",
      "description": "雾岭山脚的冷水溪流，水清流急，鱼口谨慎但活性高。",
      "water_type": "freshwater",
      "depth_min": 0.3,
      "depth_max": 2.8,
      "cast_expectation_offset": 1.2,
      "travel_time_minutes": 35,
      "license_required": "freshwater_basic",
      "level_required": 5,
      "soft_limit_kg": 8,
      "fish_pool": [
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "brook_trout",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "barbel_chub",
          "base_ratio": 0.18,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.19,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.15,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_gudgeon",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "bitterling",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "gudgeon",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "crucian_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "mandarin_fish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_perch",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "eurasian_perch",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "yellowcheek",
          "base_ratio": 0.04,
          "size_modifier": 0.86
        },
        {
          "fish_id": "smallmouth_bass",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "masu_salmon",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "cutthroat_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 1.8,
        "cloud": 3,
        "rain": 0,
        "water_flow": 1.2
      },
      "recommended_styles": [
        "lure_rod",
        "match_rod"
      ],
      "guide": "流急水清，先用小体型亮片和米诺顺流探鱼。"
    },
    {
      "id": "canyon_run",
      "name": "回声峡·激流奔段",
      "description": "峡谷中段的奔流河道，石脊和回水口切换明显，是淡水路亚入门区。",
      "water_type": "freshwater",
      "depth_min": 0.5,
      "depth_max": 3.6,
      "cast_expectation_offset": 2,
      "travel_time_minutes": 40,
      "license_required": "freshwater_basic",
      "level_required": 7,
      "soft_limit_kg": 8,
      "fish_pool": [
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.18,
          "size_modifier": 1
        },
        {
          "fish_id": "barbel_chub",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "gudgeon",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "mandarin_fish",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "brook_trout",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "bluegill",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_perch",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "yellowcheek",
          "base_ratio": 0.04,
          "size_modifier": 0.9
        },
        {
          "fish_id": "masu_salmon",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "cutthroat_trout",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "arctic_char",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "taimen",
          "base_ratio": 0.02,
          "size_modifier": 0.88
        }
      ],
      "spots": [
        {
          "id": "foam_line",
          "name": "白沫线",
          "depth_bias": 0.85,
          "cast_expectation_offset": 0.8,
          "snag_risk": 0.12
        },
        {
          "id": "boulder_tail",
          "name": "巨石尾流",
          "depth_bias": 1.1,
          "cast_expectation_offset": 1.2,
          "snag_risk": 0.18
        },
        {
          "id": "undercut_bank",
          "name": "掏岸阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -1,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 1.7,
        "cloud": 3.2,
        "rain": 0,
        "water_flow": 1
      },
      "recommended_styles": [
        "lure_rod",
        "match_rod"
      ],
      "guide": "优先用 5g-18g 亮片和米诺顺流搜索，找到鱼道后再用赛竿慢钓。"
    },
    {
      "id": "reservoir_dam",
      "name": "石门水库·大坝深水区",
      "description": "石门水库大坝前的深水斜坡，鱼体更大，控鱼和装备要求更高。",
      "water_type": "freshwater",
      "depth_min": 2,
      "depth_max": 18,
      "cast_expectation_offset": 3,
      "travel_time_minutes": 45,
      "license_required": "freshwater_advanced",
      "level_required": 12,
      "soft_limit_kg": 10,
      "fish_pool": [
        {
          "fish_id": "bass_largemouth",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "zander",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_snakehead",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_snakehead",
          "base_ratio": 0.03,
          "size_modifier": 0.94
        },
        {
          "fish_id": "rainbow_trout",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "brook_trout",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "brown_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.09,
          "size_modifier": 1.04
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "white_amur_bream",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "mandarin_fish",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "chinese_mahseer",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_carp",
          "base_ratio": 0.03,
          "size_modifier": 0.98
        },
        {
          "fish_id": "bighead_carp",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "amur_catfish",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "wuchang_bream",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "yellowcheek",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "smallmouth_bass",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "white_bass",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "striped_bass",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "kokanee_salmon",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "paddlefish",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "siberian_sturgeon",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "taimen",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "lake_sturgeon",
          "base_ratio": 0.02,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 2.2,
        "cloud": 3.5,
        "rain": 0,
        "water_flow": 0.6
      },
      "recommended_styles": [
        "bottom_rod",
        "match_rod",
        "lure_rod"
      ],
      "guide": "大坝前先保证线长和拖力，深坡底钓更稳定，追鱼再切路亚。"
    },
    {
      "id": "quarry_lake",
      "name": "玄武坑·采石深潭",
      "description": "废弃采石坑形成的深潭，岸陡水深，底层掠食鱼更多。",
      "water_type": "freshwater",
      "depth_min": 3,
      "depth_max": 22,
      "cast_expectation_offset": 2.4,
      "travel_time_minutes": 55,
      "license_required": "freshwater_advanced",
      "level_required": 14,
      "soft_limit_kg": 10,
      "fish_pool": [
        {
          "fish_id": "bass_largemouth",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_snakehead",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_snakehead",
          "base_ratio": 0.02,
          "size_modifier": 0.96
        },
        {
          "fish_id": "brook_trout",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "brown_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "asian_arowana",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "white_amur_bream",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "mandarin_fish",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_crucian_carp",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "weather_loach",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "rainbow_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "freshwater_drum",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "spotted_gar",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "burbot",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "cutthroat_trout",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_pike",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "clown_knifefish",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "peacock_bass",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "muskellunge",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "wels_catfish",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "lake_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "arctic_char",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "alligator_gar",
          "base_ratio": 0.01,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 1.6,
        "cloud": 3.2,
        "rain": 0,
        "water_flow": 0.05
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先找深浅交界和落差线，底钓与中重路亚都适合在这里轮流尝试。"
    },
    {
      "id": "lotus_marsh",
      "name": "莲影泽·荷叶湿地",
      "description": "大片荷叶与暗沟交织的湿地，伏击型鱼类多，适合守点与底钓。",
      "water_type": "freshwater",
      "depth_min": 0.6,
      "depth_max": 4.8,
      "cast_expectation_offset": -0.9,
      "travel_time_minutes": 50,
      "license_required": "freshwater_advanced",
      "level_required": 14,
      "soft_limit_kg": 12,
      "fish_pool": [
        {
          "fish_id": "common_carp",
          "base_ratio": 0.15,
          "size_modifier": 1.08
        },
        {
          "fish_id": "grass_carp",
          "base_ratio": 0.12,
          "size_modifier": 1.1
        },
        {
          "fish_id": "catfish",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "black_carp",
          "base_ratio": 0.08,
          "size_modifier": 1.08
        },
        {
          "fish_id": "northern_snakehead",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_snakehead",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "japanese_eel",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "longsnout_catfish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "bighead_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "loach",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "mud_carp",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "wuchang_bream",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "channel_catfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "blue_catfish",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "spotted_gar",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "clown_knifefish",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "peacock_bass",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "wels_catfish",
          "base_ratio": 0.02,
          "size_modifier": 1.02
        },
        {
          "fish_id": "alligator_gar",
          "base_ratio": 0.01,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "lotus_gap",
          "name": "荷叶缺口",
          "depth_bias": 0.8,
          "cast_expectation_offset": -0.8,
          "snag_risk": 0.18
        },
        {
          "id": "reed_channel",
          "name": "芦苇水道",
          "depth_bias": 1,
          "cast_expectation_offset": 0.2,
          "snag_risk": 0.16
        },
        {
          "id": "peat_hole",
          "name": "黑泥深窝",
          "depth_bias": 1.2,
          "cast_expectation_offset": 1.4,
          "snag_risk": 0.24
        }
      ],
      "environment_baseline": {
        "wind": 0.9,
        "cloud": 4,
        "rain": 0,
        "water_flow": 0.15
      },
      "recommended_styles": [
        "hand_rod",
        "bottom_rod"
      ],
      "guide": "草边先用手竿守窗口，想搏大鱼就改底钓守暗沟和泥底深窝。"
    },
    {
      "id": "sea_estuary",
      "name": "南岬镇·河口海湾",
      "description": "淡咸水交汇的南岬河口，潮流复杂，海鱼和洄游鱼混杂。",
      "water_type": "brackish",
      "depth_min": 1,
      "depth_max": 8,
      "cast_expectation_offset": 1.2,
      "travel_time_minutes": 60,
      "license_required": "saltwater_basic",
      "level_required": 20,
      "soft_limit_kg": 14,
      "fish_pool": [
        {
          "fish_id": "mullet",
          "base_ratio": 0.2,
          "size_modifier": 1
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.12,
          "size_modifier": 0.92
        },
        {
          "fish_id": "chinese_perch",
          "base_ratio": 0.16,
          "size_modifier": 1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "flounder",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "olive_flounder",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "barracuda",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.09,
          "size_modifier": 0.94
        },
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "white_spotted_conger",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "largehead_hairtail",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "tilapia",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "mosquitofish",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "medaka",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "needlefish_longtom",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "milkfish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "rabbitfish",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "tarpon_indo_pacific",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 3,
        "cloud": 4,
        "rain": 0,
        "water_flow": 1
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "潮头追青换路亚，潮缓时改用底钓守沟槽更稳。"
    },
    {
      "id": "mangrove_flat",
      "name": "红树湾·潮汐泥滩",
      "description": "红树林外缘潮汐泥滩，咸淡水鱼随潮进出。",
      "water_type": "brackish",
      "depth_min": 0.8,
      "depth_max": 5.5,
      "cast_expectation_offset": 0.6,
      "travel_time_minutes": 80,
      "license_required": "saltwater_basic",
      "level_required": 24,
      "soft_limit_kg": 16,
      "fish_pool": [
        {
          "fish_id": "mullet",
          "base_ratio": 0.2,
          "size_modifier": 1
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.11,
          "size_modifier": 0.98
        },
        {
          "fish_id": "chinese_perch",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "olive_flounder",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "barracuda",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "white_spotted_conger",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "largehead_hairtail",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "tilapia",
          "base_ratio": 0.15,
          "size_modifier": 1
        },
        {
          "fish_id": "mosquitofish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "medaka",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "river_goby",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_pompano",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "milkfish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "rabbitfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "threadfin_bream",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "tarpon_indo_pacific",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 3.4,
        "cloud": 5,
        "rain": 0,
        "water_flow": 1.3
      },
      "recommended_styles": [
        "bottom_rod",
        "hand_rod",
        "lure_rod"
      ],
      "guide": "潮沟底钓效率最高，浅水追食时再用表层亮片扫边。"
    },
    {
      "id": "breakwater_pier",
      "name": "白礁港·防波堤",
      "description": "港外防波堤与岸壁落差明显，兼顾岸投底钓和中型路亚。",
      "water_type": "saltwater",
      "depth_min": 2,
      "depth_max": 12,
      "cast_expectation_offset": 3.1,
      "travel_time_minutes": 90,
      "license_required": "saltwater_basic",
      "level_required": 28,
      "soft_limit_kg": 18,
      "fish_pool": [
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.16,
          "size_modifier": 1.02
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.14,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.11,
          "size_modifier": 1.02
        },
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "olive_flounder",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.11,
          "size_modifier": 1.06
        },
        {
          "fish_id": "golden_pompano",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "needlefish_longtom",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "white_spotted_conger",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "barracuda",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "rabbitfish",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "threadfin_bream",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "tarpon_indo_pacific",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "pier_shadow",
          "name": "堤脚阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.2,
          "snag_risk": 0.18
        },
        {
          "id": "outer_corner",
          "name": "外拐角",
          "depth_bias": 1.15,
          "cast_expectation_offset": 2.2,
          "snag_risk": 0.22
        },
        {
          "id": "rock_step",
          "name": "乱石台阶",
          "depth_bias": 1.05,
          "cast_expectation_offset": 0.8,
          "snag_risk": 0.28
        }
      ],
      "environment_baseline": {
        "wind": 2.4,
        "cloud": 4.2,
        "rain": 0,
        "water_flow": 1.4
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用底钓摸清台阶和暗礁，再用 20g-40g 铁板扫拐角追鱼。"
    },
    {
      "id": "offshore_reef",
      "name": "银鳞岛·近海礁盘",
      "description": "银鳞岛外侧礁盘，水深流急，是高等级海钓区域。",
      "water_type": "saltwater",
      "depth_min": 4,
      "depth_max": 28,
      "cast_expectation_offset": 4.6,
      "travel_time_minutes": 120,
      "license_required": "offshore_advanced",
      "level_required": 32,
      "soft_limit_kg": 24,
      "fish_pool": [
        {
          "fish_id": "yellowfin_tuna",
          "base_ratio": 0.08,
          "size_modifier": 0.88
        },
        {
          "fish_id": "skipjack_tuna",
          "base_ratio": 0.14,
          "size_modifier": 0.92
        },
        {
          "fish_id": "mahi_mahi",
          "base_ratio": 0.17,
          "size_modifier": 1
        },
        {
          "fish_id": "barracuda",
          "base_ratio": 0.16,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.16,
          "size_modifier": 1.08
        },
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.15,
          "size_modifier": 1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "white_spotted_conger",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "olive_flounder",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "largehead_hairtail",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "mullet",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "brown_grouper",
          "base_ratio": 0.07,
          "size_modifier": 0.94
        },
        {
          "fish_id": "amberjack",
          "base_ratio": 0.08,
          "size_modifier": 0.96
        },
        {
          "fish_id": "bluefin_trevally",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "threadfin_bream",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "bigeye_trevally",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "coral_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_grouper",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "longtail_tuna",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "wahoo",
          "base_ratio": 0.02,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "near_bank",
          "name": "近岸缓坡",
          "depth_bias": 0.7,
          "cast_expectation_offset": -2,
          "snag_risk": 0.05
        },
        {
          "id": "deep_edge",
          "name": "深浅交界",
          "depth_bias": 1.15,
          "cast_expectation_offset": 1.6,
          "snag_risk": 0.12
        },
        {
          "id": "structure_shadow",
          "name": "障碍阴影",
          "depth_bias": 0.95,
          "cast_expectation_offset": -0.4,
          "snag_risk": 0.22
        }
      ],
      "environment_baseline": {
        "wind": 4.2,
        "cloud": 3.8,
        "rain": 0,
        "water_flow": 1.8
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "重底钓先稳住礁边和陡坎，鱼群浮起后再切长抛铁板和波扒。"
    },
    {
      "id": "kelp_shoal",
      "name": "海杉礁·海带浅礁",
      "description": "海带带与暗礁相连的外海浅礁，鱼群轮转快，是中后期海钓主战场。",
      "water_type": "saltwater",
      "depth_min": 5,
      "depth_max": 20,
      "cast_expectation_offset": 4,
      "travel_time_minutes": 150,
      "license_required": "offshore_advanced",
      "level_required": 45,
      "soft_limit_kg": 35,
      "fish_pool": [
        {
          "fish_id": "red_drum",
          "base_ratio": 0.1,
          "size_modifier": 1.08
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.11,
          "size_modifier": 1.1
        },
        {
          "fish_id": "barracuda",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.12,
          "size_modifier": 1.12
        },
        {
          "fish_id": "brown_grouper",
          "base_ratio": 0.12,
          "size_modifier": 1.1
        },
        {
          "fish_id": "amberjack",
          "base_ratio": 0.1,
          "size_modifier": 1.1
        },
        {
          "fish_id": "cobia",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "bluefin_trevally",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.04,
          "size_modifier": 1.1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_pompano",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "bigeye_trevally",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "coral_trout",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_grouper",
          "base_ratio": 0.02,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "kelp_lane",
          "name": "海带水道",
          "depth_bias": 0.95,
          "cast_expectation_offset": 1,
          "snag_risk": 0.2
        },
        {
          "id": "reef_drop",
          "name": "礁壁断层",
          "depth_bias": 1.2,
          "cast_expectation_offset": 2.6,
          "snag_risk": 0.3
        },
        {
          "id": "whitewater_edge",
          "name": "白浪边线",
          "depth_bias": 0.85,
          "cast_expectation_offset": 0.4,
          "snag_risk": 0.18
        }
      ],
      "environment_baseline": {
        "wind": 2.8,
        "cloud": 4.8,
        "rain": 0,
        "water_flow": 1.9
      },
      "recommended_styles": [
        "lure_rod",
        "bottom_rod"
      ],
      "guide": "鱼群上浮就打表层和铁板，贴礁停口时回到底钓守断层。"
    },
    {
      "id": "stormbreak_headland",
      "name": "风裂岬·外台",
      "description": "迎风外伸的高岬石台，白浪边线、饵鱼带和斜切流同时存在，适合在浪脚和外台落差间轮流搜索。",
      "water_type": "saltwater",
      "depth_min": 6,
      "depth_max": 24,
      "cast_expectation_offset": 4.9,
      "travel_time_minutes": 165,
      "license_required": "shipowner_prep_license",
      "level_required": 40,
      "soft_limit_kg": 34,
      "fish_pool": [
        {
          "fish_id": "atlantic_sailfish",
          "base_ratio": 0.02,
          "size_modifier": 1.02
        },
        {
          "fish_id": "dog_snapper",
          "base_ratio": 0.1,
          "size_modifier": 1.06
        },
        {
          "fish_id": "mutton_snapper",
          "base_ratio": 0.11,
          "size_modifier": 1.04
        },
        {
          "fish_id": "almaco_jack",
          "base_ratio": 0.1,
          "size_modifier": 1.05
        },
        {
          "fish_id": "blackfin_tuna",
          "base_ratio": 0.13,
          "size_modifier": 1.04
        },
        {
          "fish_id": "rainbow_tuna",
          "base_ratio": 0.16,
          "size_modifier": 1.02
        },
        {
          "fish_id": "pomfret_pacific_giant",
          "base_ratio": 0.09,
          "size_modifier": 1.02
        },
        {
          "fish_id": "giant_blue_runner",
          "base_ratio": 0.13,
          "size_modifier": 1.02
        },
        {
          "fish_id": "giant_spanish_mackerel",
          "base_ratio": 0.075,
          "size_modifier": 1.04
        },
        {
          "fish_id": "king_mackerel_giant",
          "base_ratio": 0.08,
          "size_modifier": 1.04
        }
      ],
      "spots": [
        {
          "id": "spray_lane",
          "name": "白浪边线",
          "depth_bias": 0.9,
          "cast_expectation_offset": 1.4,
          "snag_risk": 0.16
        },
        {
          "id": "outer_table",
          "name": "外台落差",
          "depth_bias": 1.18,
          "cast_expectation_offset": 2.5,
          "snag_risk": 0.24
        },
        {
          "id": "bait_shadow",
          "name": "饵鱼阴影带",
          "depth_bias": 0.98,
          "cast_expectation_offset": 0.8,
          "snag_risk": 0.18
        }
      ],
      "environment_baseline": {
        "wind": 3.3,
        "cloud": 4.6,
        "rain": 0,
        "water_flow": 2
      },
      "recommended_styles": [
        "lure_rod",
        "bottom_rod"
      ],
      "guide": "先用重铁板和远投米诺扫白浪边线，停口后回到底钓守外台落差。"
    },
    {
      "id": "blackreef_dropoff",
      "name": "黑礁断面",
      "description": "黑火山礁外沿骤然跌入深水，挂底率和大鱼率都很高，断面、水流和暗槽变化明显。",
      "water_type": "saltwater",
      "depth_min": 8,
      "depth_max": 34,
      "cast_expectation_offset": 5.7,
      "travel_time_minutes": 185,
      "license_required": "shipowner_prep_license",
      "level_required": 40,
      "soft_limit_kg": 46,
      "fish_pool": [
        {
          "fish_id": "swordfish_broadbill",
          "base_ratio": 0.035,
          "size_modifier": 1.04
        },
        {
          "fish_id": "silvertip_shark",
          "base_ratio": 0.05,
          "size_modifier": 1.03
        },
        {
          "fish_id": "goliath_grouper",
          "base_ratio": 0.025,
          "size_modifier": 1.05
        },
        {
          "fish_id": "warsaw_grouper",
          "base_ratio": 0.025,
          "size_modifier": 1.05
        },
        {
          "fish_id": "cubera_snapper",
          "base_ratio": 0.07,
          "size_modifier": 1.05
        },
        {
          "fish_id": "snowy_grouper",
          "base_ratio": 0.075,
          "size_modifier": 1.03
        },
        {
          "fish_id": "yellowedge_grouper",
          "base_ratio": 0.07,
          "size_modifier": 1.04
        },
        {
          "fish_id": "greater_amberjack_giant",
          "base_ratio": 0.055,
          "size_modifier": 1.04
        },
        {
          "fish_id": "greater_cobia",
          "base_ratio": 0.05,
          "size_modifier": 1.03
        },
        {
          "fish_id": "bigeye_scad",
          "base_ratio": 0.05,
          "size_modifier": 0.98
        },
        {
          "fish_id": "yellowstripe_scad",
          "base_ratio": 0.045,
          "size_modifier": 0.98
        },
        {
          "fish_id": "yellowfin_goatfish",
          "base_ratio": 0.04,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "ledge_tip",
          "name": "断面尖角",
          "depth_bias": 1.12,
          "cast_expectation_offset": 2.9,
          "snag_risk": 0.24
        },
        {
          "id": "shadow_slot",
          "name": "暗槽伏击带",
          "depth_bias": 1.25,
          "cast_expectation_offset": 3.3,
          "snag_risk": 0.31
        },
        {
          "id": "foam_corner",
          "name": "泡沫回卷角",
          "depth_bias": 0.92,
          "cast_expectation_offset": 1.2,
          "snag_risk": 0.2
        }
      ],
      "environment_baseline": {
        "wind": 3.8,
        "cloud": 4.3,
        "rain": 0,
        "water_flow": 2.4
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用重底钓和大活饵守暗槽，再用 50g+ 铁板与大米诺搏断面回游鱼，波动大但单尾更值钱。"
    },
    {
      "id": "seamount_edge",
      "name": "玄潮台·海山边缘",
      "description": "海山边缘的强流带与深蓝断崖，专为终盘大物准备。",
      "water_type": "saltwater",
      "depth_min": 12,
      "depth_max": 40,
      "cast_expectation_offset": 5.6,
      "travel_time_minutes": 210,
      "license_required": "bluewater_master",
      "level_required": 60,
      "soft_limit_kg": 60,
      "fish_pool": [
        {
          "fish_id": "yellowfin_tuna",
          "base_ratio": 0.1,
          "size_modifier": 1.12
        },
        {
          "fish_id": "skipjack_tuna",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "mahi_mahi",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "amberjack",
          "base_ratio": 0.1,
          "size_modifier": 1.12
        },
        {
          "fish_id": "brown_grouper",
          "base_ratio": 0.08,
          "size_modifier": 1.12
        },
        {
          "fish_id": "cobia",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "dogtooth_tuna",
          "base_ratio": 0.08,
          "size_modifier": 1.14
        },
        {
          "fish_id": "sailfish_pacific",
          "base_ratio": 0.04,
          "size_modifier": 1.14
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.08,
          "size_modifier": 1.12
        },
        {
          "fish_id": "largehead_hairtail",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "bluefin_trevally",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "bigeye_trevally",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_grouper",
          "base_ratio": 0.02,
          "size_modifier": 1
        },
        {
          "fish_id": "longtail_tuna",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "wahoo",
          "base_ratio": 0.02,
          "size_modifier": 1
        }
      ],
      "spots": [
        {
          "id": "tuna_line",
          "name": "金枪潮线",
          "depth_bias": 0.9,
          "cast_expectation_offset": 3.2,
          "snag_risk": 0.16
        },
        {
          "id": "deep_lift",
          "name": "深层抬升带",
          "depth_bias": 1.25,
          "cast_expectation_offset": 2.8,
          "snag_risk": 0.24
        },
        {
          "id": "current_wall",
          "name": "强流壁",
          "depth_bias": 1.05,
          "cast_expectation_offset": 1.8,
          "snag_risk": 0.2
        }
      ],
      "environment_baseline": {
        "wind": 3.1,
        "cloud": 5,
        "rain": 0,
        "water_flow": 2.3
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用重底钓确认深层大物，再用 40g+ 铁板和大波扒追巡游鱼群。"
    },
    {
      "id": "boat_bailu_lake",
      "name": "白鹭湖·晨雾船钓之旅",
      "description": "跟船驶入白鹭湖腹地的晨雾水面，主打中型淡水鱼群和稳定长线作钓。",
      "water_type": "freshwater",
      "depth_min": 2.5,
      "depth_max": 9,
      "cast_expectation_offset": 6.8,
      "travel_time_minutes": 30,
      "license_required": "freshwater_basic",
      "level_required": 3,
      "soft_limit_kg": 8,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 5,
        "base_price": 2500,
        "weight_min_kg_override": 0.1,
        "weight_max_kg_override": 8,
        "encounter_multiplier": 0.8
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 16,
            "top": 54
          },
          {
            "left": 24,
            "top": 50
          },
          {
            "left": 32,
            "top": 56
          },
          {
            "left": 40,
            "top": 49
          },
          {
            "left": 48,
            "top": 55
          },
          {
            "left": 56,
            "top": 48
          },
          {
            "left": 64,
            "top": 54
          },
          {
            "left": 72,
            "top": 50
          },
          {
            "left": 80,
            "top": 56
          },
          {
            "left": 86,
            "top": 49
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "common_carp",
          "base_ratio": 0.22,
          "size_modifier": 0.9
        },
        {
          "fish_id": "grass_carp",
          "base_ratio": 0.18,
          "size_modifier": 0.88
        },
        {
          "fish_id": "topmouth_culter",
          "base_ratio": 0.16,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_snakehead",
          "base_ratio": 0.12,
          "size_modifier": 1
        },
        {
          "fish_id": "black_carp",
          "base_ratio": 0.1,
          "size_modifier": 0.9
        },
        {
          "fish_id": "mandarin_fish",
          "base_ratio": 0.1,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_carp",
          "base_ratio": 0.14,
          "size_modifier": 0.88
        },
        {
          "fish_id": "bighead_carp",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "catfish",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "crucian_carp",
          "base_ratio": 0.09,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_crucian_carp",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "bluegill",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_catfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "sharpbelly",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "mud_carp",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "wuchang_bream",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "pumpkinseed",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "redear_sunfish",
          "base_ratio": 0.04,
          "size_modifier": 1
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 1.3,
        "cloud": 4.2,
        "rain": 0,
        "water_flow": 0.12
      },
      "recommended_styles": [
        "match_rod",
        "bottom_rod"
      ],
      "guide": "上船后优先保证线长和拖力，晨口用赛竿扫中层，鱼层压低后改底钓守深湾。"
    },
    {
      "id": "boat_shimen_reservoir",
      "name": "石门水库·深湾船钓之旅",
      "description": "沿石门水库深湾巡航，主打深水库湾的冷水掠食鱼、鲟科和重型底层鱼。",
      "water_type": "freshwater",
      "depth_min": 6,
      "depth_max": 24,
      "cast_expectation_offset": 8.2,
      "travel_time_minutes": 50,
      "license_required": "freshwater_advanced",
      "level_required": 12,
      "soft_limit_kg": 30,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 7,
        "base_price": 14000,
        "weight_min_kg_override": 0.15,
        "weight_max_kg_override": 35,
        "encounter_multiplier": 1.5
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 16,
            "top": 54
          },
          {
            "left": 24,
            "top": 50
          },
          {
            "left": 32,
            "top": 56
          },
          {
            "left": 40,
            "top": 49
          },
          {
            "left": 48,
            "top": 55
          },
          {
            "left": 56,
            "top": 48
          },
          {
            "left": 64,
            "top": 54
          },
          {
            "left": 72,
            "top": 50
          },
          {
            "left": 80,
            "top": 56
          },
          {
            "left": 86,
            "top": 49
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "bass_largemouth",
          "base_ratio": 0.13,
          "size_modifier": 1
        },
        {
          "fish_id": "zander",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_snakehead",
          "base_ratio": 0.08,
          "size_modifier": 1.08
        },
        {
          "fish_id": "rainbow_trout",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "white_amur_bream",
          "base_ratio": 0.11,
          "size_modifier": 1
        },
        {
          "fish_id": "chinese_mahseer",
          "base_ratio": 0.08,
          "size_modifier": 1
        },
        {
          "fish_id": "silver_carp",
          "base_ratio": 0.06,
          "size_modifier": 1.06
        },
        {
          "fish_id": "amur_catfish",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "black_carp",
          "base_ratio": 0.06,
          "size_modifier": 1.08
        },
        {
          "fish_id": "catfish",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "brown_trout",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "longsnout_catfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "brook_trout",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "blue_catfish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "yellowcheek",
          "base_ratio": 0.08,
          "size_modifier": 1.08
        },
        {
          "fish_id": "white_bass",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "striped_bass",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "burbot",
          "base_ratio": 0.06,
          "size_modifier": 1
        },
        {
          "fish_id": "kokanee_salmon",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "northern_pike",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "paddlefish",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "siberian_sturgeon",
          "base_ratio": 0.04,
          "size_modifier": 1
        },
        {
          "fish_id": "wels_catfish",
          "base_ratio": 0.04,
          "size_modifier": 1.08
        },
        {
          "fish_id": "lake_trout",
          "base_ratio": 0.05,
          "size_modifier": 1
        },
        {
          "fish_id": "taimen",
          "base_ratio": 0.03,
          "size_modifier": 1.06
        },
        {
          "fish_id": "lake_sturgeon",
          "base_ratio": 0.03,
          "size_modifier": 1
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 2.1,
        "cloud": 3.6,
        "rain": 0,
        "water_flow": 0.45
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用重底钓守深槽和库湾边，再用大米诺与铁板追中层饵鱼群，这张船钓现在是淡水 30kg 档。"
    },
    {
      "id": "boat_baijiao_nearshore",
      "name": "白礁港·近海船钓之旅",
      "description": "从白礁港外侧巡到潮口断层，主打成群表层青物与 45kg 级近海大鱼。",
      "water_type": "saltwater",
      "depth_min": 5,
      "depth_max": 18,
      "cast_expectation_offset": 8.4,
      "travel_time_minutes": 80,
      "license_required": "saltwater_basic",
      "level_required": 20,
      "soft_limit_kg": 42,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 7,
        "base_price": 14000,
        "weight_min_kg_override": 0.35,
        "weight_max_kg_override": 45,
        "encounter_multiplier": 1.95
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 18,
            "top": 54
          },
          {
            "left": 29,
            "top": 49
          },
          {
            "left": 40,
            "top": 55
          },
          {
            "left": 51,
            "top": 48
          },
          {
            "left": 62,
            "top": 54
          },
          {
            "left": 73,
            "top": 49
          },
          {
            "left": 84,
            "top": 55
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.04,
          "size_modifier": 0.96
        },
        {
          "fish_id": "golden_pompano",
          "base_ratio": 0.06,
          "size_modifier": 1.04
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.13,
          "size_modifier": 1.1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.03,
          "size_modifier": 0.96
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.02,
          "size_modifier": 0.94
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.03,
          "size_modifier": 0.96
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.12,
          "size_modifier": 1.16
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.11,
          "size_modifier": 1.16
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.08,
          "size_modifier": 1.12
        },
        {
          "fish_id": "bigeye_scad",
          "base_ratio": 0.01,
          "size_modifier": 0.88
        },
        {
          "fish_id": "yellowstripe_scad",
          "base_ratio": 0.01,
          "size_modifier": 0.86
        },
        {
          "fish_id": "indian_oil_sardine",
          "base_ratio": 0,
          "size_modifier": 0.82
        },
        {
          "fish_id": "yellowfin_goatfish",
          "base_ratio": 0.01,
          "size_modifier": 0.9
        },
        {
          "fish_id": "silver_biddy",
          "base_ratio": 0,
          "size_modifier": 0.88
        },
        {
          "fish_id": "mangrove_jack",
          "base_ratio": 0.14,
          "size_modifier": 1.18
        },
        {
          "fish_id": "spangled_emperor",
          "base_ratio": 0.03,
          "size_modifier": 1
        },
        {
          "fish_id": "mackerel_tuna",
          "base_ratio": 0.1,
          "size_modifier": 1.18
        },
        {
          "fish_id": "queenfish_talang",
          "base_ratio": 0.08,
          "size_modifier": 1.14
        },
        {
          "fish_id": "african_pompano",
          "base_ratio": 0.1,
          "size_modifier": 1.2
        },
        {
          "fish_id": "blacktip_trevally",
          "base_ratio": 0.09,
          "size_modifier": 1.16
        },
        {
          "fish_id": "diamond_trevally",
          "base_ratio": 0.08,
          "size_modifier": 1.16
        },
        {
          "fish_id": "green_jobfish",
          "base_ratio": 0.09,
          "size_modifier": 1.14
        },
        {
          "fish_id": "great_barracuda",
          "base_ratio": 0.08,
          "size_modifier": 1.18
        },
        {
          "fish_id": "tarpon_indo_pacific",
          "base_ratio": 0.06,
          "size_modifier": 1.14
        },
        {
          "fish_id": "skipjack_tuna",
          "base_ratio": 0.05,
          "size_modifier": 1.08
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.04,
          "size_modifier": 0.98
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 3.2,
        "cloud": 4.1,
        "rain": 0,
        "water_flow": 1.6
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用底钓摸断层和礁边，小群浮头时再切 20g-40g 铁板追青。"
    },
    {
      "id": "boat_lanchao_shelf",
      "name": "蓝潮岬·外缘船钓之旅",
      "description": "沿蓝潮岬外缘的潮锋和礁脊巡航，主打更厚的近海大物层和 70kg 级冲刺窗口。",
      "water_type": "saltwater",
      "depth_min": 7,
      "depth_max": 26,
      "cast_expectation_offset": 9.3,
      "travel_time_minutes": 110,
      "license_required": "saltwater_basic",
      "level_required": 27,
      "soft_limit_kg": 64,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 7,
        "base_price": 35000,
        "weight_min_kg_override": 0.8,
        "weight_max_kg_override": 70,
        "encounter_multiplier": 1.9
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 18,
            "top": 54
          },
          {
            "left": 29,
            "top": 49
          },
          {
            "left": 40,
            "top": 55
          },
          {
            "left": 51,
            "top": 48
          },
          {
            "left": 62,
            "top": 54
          },
          {
            "left": 73,
            "top": 49
          },
          {
            "left": 84,
            "top": 55
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "amberjack",
          "base_ratio": 0.32,
          "size_modifier": 1.18
        },
        {
          "fish_id": "cobia",
          "base_ratio": 0.26,
          "size_modifier": 1.16
        },
        {
          "fish_id": "mahi_mahi",
          "base_ratio": 0.22,
          "size_modifier": 1.12
        },
        {
          "fish_id": "longtail_tuna",
          "base_ratio": 0.22,
          "size_modifier": 1.14
        },
        {
          "fish_id": "brown_grouper",
          "base_ratio": 0.08,
          "size_modifier": 1.14
        },
        {
          "fish_id": "bigeye_trevally",
          "base_ratio": 0.06,
          "size_modifier": 1.1
        },
        {
          "fish_id": "bluefin_trevally",
          "base_ratio": 0.08,
          "size_modifier": 1.16
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.02,
          "size_modifier": 1.04
        },
        {
          "fish_id": "coral_trout",
          "base_ratio": 0.07,
          "size_modifier": 1.12
        },
        {
          "fish_id": "giant_grouper",
          "base_ratio": 0.14,
          "size_modifier": 1.08
        },
        {
          "fish_id": "yellowfin_tuna",
          "base_ratio": 0.14,
          "size_modifier": 1.08
        },
        {
          "fish_id": "dogtooth_tuna",
          "base_ratio": 0.12,
          "size_modifier": 1.08
        },
        {
          "fish_id": "wahoo",
          "base_ratio": 0.12,
          "size_modifier": 1.14
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.03,
          "size_modifier": 1.04
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.06,
          "size_modifier": 1.08
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.03,
          "size_modifier": 1.1
        },
        {
          "fish_id": "mangrove_jack",
          "base_ratio": 0.05,
          "size_modifier": 1.14
        },
        {
          "fish_id": "bohar_snapper",
          "base_ratio": 0.07,
          "size_modifier": 1.16
        },
        {
          "fish_id": "green_jobfish",
          "base_ratio": 0.08,
          "size_modifier": 1.16
        },
        {
          "fish_id": "african_pompano",
          "base_ratio": 0.08,
          "size_modifier": 1.16
        },
        {
          "fish_id": "queenfish_talang",
          "base_ratio": 0.05,
          "size_modifier": 1.12
        },
        {
          "fish_id": "rainbow_runner",
          "base_ratio": 0.16,
          "size_modifier": 1.16
        },
        {
          "fish_id": "narrowbarred_mackerel",
          "base_ratio": 0.16,
          "size_modifier": 1.22
        },
        {
          "fish_id": "blacktip_trevally",
          "base_ratio": 0.05,
          "size_modifier": 1.14
        },
        {
          "fish_id": "diamond_trevally",
          "base_ratio": 0.05,
          "size_modifier": 1.14
        },
        {
          "fish_id": "malabar_grouper",
          "base_ratio": 0.16,
          "size_modifier": 1.16
        },
        {
          "fish_id": "potato_grouper",
          "base_ratio": 0.12,
          "size_modifier": 1.08
        },
        {
          "fish_id": "humphead_wrasse",
          "base_ratio": 0.1,
          "size_modifier": 1.1
        },
        {
          "fish_id": "great_barracuda",
          "base_ratio": 0.05,
          "size_modifier": 1.14
        },
        {
          "fish_id": "yellowfin_goatfish",
          "base_ratio": 0,
          "size_modifier": 0.9
        },
        {
          "fish_id": "bigeye_scad",
          "base_ratio": 0,
          "size_modifier": 0.86
        },
        {
          "fish_id": "yellowstripe_scad",
          "base_ratio": 0,
          "size_modifier": 0.84
        },
        {
          "fish_id": "mackerel_tuna",
          "base_ratio": 0.03,
          "size_modifier": 1.08
        },
        {
          "fish_id": "spangled_emperor",
          "base_ratio": 0.01,
          "size_modifier": 1
        },
        {
          "fish_id": "skipjack_tuna",
          "base_ratio": 0.12,
          "size_modifier": 1.12
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.12,
          "size_modifier": 1.08
        },
        {
          "fish_id": "tarpon_indo_pacific",
          "base_ratio": 0.03,
          "size_modifier": 1.08
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 3.8,
        "cloud": 4,
        "rain": 0,
        "water_flow": 1.9
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "重底钓先探礁脊和深坎，潮锋一旦起鱼就用 30g+ 铁板与大米诺连打。"
    },
    {
      "id": "boat_yinlin_offshore",
      "name": "银鳞岛·外海船钓之旅",
      "description": "从银鳞岛外抛入外海流线，面对密集巡游鱼群和真正的大物窗口。",
      "water_type": "saltwater",
      "depth_min": 8,
      "depth_max": 32,
      "cast_expectation_offset": 10.2,
      "travel_time_minutes": 130,
      "license_required": "offshore_advanced",
      "level_required": 40,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 10,
        "base_price": 80000,
        "weight_min_kg_override": 0.8,
        "encounter_multiplier": 2.5
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 16,
            "top": 54
          },
          {
            "left": 24,
            "top": 50
          },
          {
            "left": 32,
            "top": 56
          },
          {
            "left": 40,
            "top": 49
          },
          {
            "left": 48,
            "top": 55
          },
          {
            "left": 56,
            "top": 48
          },
          {
            "left": 64,
            "top": 54
          },
          {
            "left": 72,
            "top": 50
          },
          {
            "left": 80,
            "top": 56
          },
          {
            "left": 86,
            "top": 49
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "amberjack",
          "base_ratio": 0.12,
          "size_modifier": 1.08
        },
        {
          "fish_id": "cobia",
          "base_ratio": 0.1,
          "size_modifier": 1.08
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.08,
          "size_modifier": 1.08
        },
        {
          "fish_id": "mahi_mahi",
          "base_ratio": 0.1,
          "size_modifier": 1.04
        },
        {
          "fish_id": "wahoo",
          "base_ratio": 0.06,
          "size_modifier": 1.08
        },
        {
          "fish_id": "longtail_tuna",
          "base_ratio": 0.05,
          "size_modifier": 1.08
        },
        {
          "fish_id": "malabar_grouper",
          "base_ratio": 0.06,
          "size_modifier": 1.08
        },
        {
          "fish_id": "brown_grouper",
          "base_ratio": 0.0216,
          "size_modifier": 1.04
        },
        {
          "fish_id": "coral_trout",
          "base_ratio": 0.018,
          "size_modifier": 1.04
        },
        {
          "fish_id": "rainbow_runner",
          "base_ratio": 0.06,
          "size_modifier": 1.08
        },
        {
          "fish_id": "narrowbarred_mackerel",
          "base_ratio": 0.05,
          "size_modifier": 1.08
        },
        {
          "fish_id": "african_pompano",
          "base_ratio": 0.0144,
          "size_modifier": 1.06
        },
        {
          "fish_id": "bohar_snapper",
          "base_ratio": 0.0144,
          "size_modifier": 1.06
        },
        {
          "fish_id": "green_jobfish",
          "base_ratio": 0.0144,
          "size_modifier": 1.06
        },
        {
          "fish_id": "great_barracuda",
          "base_ratio": 0.018,
          "size_modifier": 1.08
        },
        {
          "fish_id": "blacktip_trevally",
          "base_ratio": 0.018,
          "size_modifier": 1.06
        },
        {
          "fish_id": "diamond_trevally",
          "base_ratio": 0.0144,
          "size_modifier": 1.06
        },
        {
          "fish_id": "bigeye_trevally",
          "base_ratio": 0.018,
          "size_modifier": 1.04
        },
        {
          "fish_id": "bluefin_trevally",
          "base_ratio": 0.018,
          "size_modifier": 1.04
        },
        {
          "fish_id": "golden_trevally",
          "base_ratio": 0.0108,
          "size_modifier": 1.02
        },
        {
          "fish_id": "skipjack_tuna",
          "base_ratio": 0.07,
          "size_modifier": 1
        },
        {
          "fish_id": "spanish_mackerel",
          "base_ratio": 0.018,
          "size_modifier": 1.02
        },
        {
          "fish_id": "snapper_red",
          "base_ratio": 0.018,
          "size_modifier": 1.02
        },
        {
          "fish_id": "red_drum",
          "base_ratio": 0.04,
          "size_modifier": 0.98
        },
        {
          "fish_id": "olive_flounder",
          "base_ratio": 0.0108,
          "size_modifier": 1
        },
        {
          "fish_id": "golden_pompano",
          "base_ratio": 0.0108,
          "size_modifier": 1
        },
        {
          "fish_id": "japanese_mackerel",
          "base_ratio": 0.0108,
          "size_modifier": 1
        },
        {
          "fish_id": "yellow_croaker",
          "base_ratio": 0.0108,
          "size_modifier": 1
        },
        {
          "fish_id": "filefish",
          "base_ratio": 0.0072,
          "size_modifier": 1
        },
        {
          "fish_id": "black_porgy",
          "base_ratio": 0.0072,
          "size_modifier": 1
        },
        {
          "fish_id": "rockfish",
          "base_ratio": 0.0072,
          "size_modifier": 1
        },
        {
          "fish_id": "mullet",
          "base_ratio": 0.0072,
          "size_modifier": 0.96
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 4.4,
        "cloud": 3.9,
        "rain": 0,
        "water_flow": 2
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "外海先稳住拖力和线杯容量，鱼群上浮时重铁板和波扒效率最高。"
    },
    {
      "id": "boat_crimson_trench",
      "name": "赤湾深槽船钓之旅",
      "description": "船队沿赤湾外缘切入深槽潮道，水深、流速和鱼层变化都更剧烈，适合重装搜索巡游鱼和深层大鱼。",
      "water_type": "saltwater",
      "depth_min": 10,
      "depth_max": 36,
      "cast_expectation_offset": 10.9,
      "travel_time_minutes": 150,
      "license_required": "bluewater_master",
      "level_required": 48,
      "soft_limit_kg": 60,
      "fishing_mode": "boat",
      "scene_type": "boat",
      "boat_trip": {
        "seat_capacity": 10,
        "base_price": 160000,
        "weight_min_kg_override": 2,
        "weight_max_kg_override": 95,
        "encounter_multiplier": 2.85
      },
      "boat_scene": {
        "sky": {
          "top": 0,
          "bottom": 38
        },
        "cabin": {
          "top": 18,
          "bottom": 55
        },
        "deck": {
          "top": 48,
          "bottom": 74
        },
        "hull": {
          "top": 73,
          "bottom": 84
        },
        "water": {
          "top": 82,
          "bottom": 100
        },
        "player_bounds": {
          "left_min": 14,
          "left_max": 88,
          "top_min": 40,
          "top_max": 57
        },
        "player_positions": [
          {
            "left": 16,
            "top": 54
          },
          {
            "left": 24,
            "top": 50
          },
          {
            "left": 34,
            "top": 56
          },
          {
            "left": 44,
            "top": 49
          },
          {
            "left": 54,
            "top": 55
          },
          {
            "left": 64,
            "top": 48
          },
          {
            "left": 76,
            "top": 54
          },
          {
            "left": 86,
            "top": 49
          }
        ]
      },
      "fish_pool": [
        {
          "fish_id": "bluefin_tuna_giant",
          "base_ratio": 0.035,
          "size_modifier": 1.08
        },
        {
          "fish_id": "black_marlin",
          "base_ratio": 0.015,
          "size_modifier": 1.04
        },
        {
          "fish_id": "blue_marlin",
          "base_ratio": 0.018,
          "size_modifier": 1.04
        },
        {
          "fish_id": "striped_marlin",
          "base_ratio": 0.02,
          "size_modifier": 1.04
        },
        {
          "fish_id": "pacific_bluefin_tuna",
          "base_ratio": 0.025,
          "size_modifier": 1.07
        },
        {
          "fish_id": "giant_mako_shark",
          "base_ratio": 0.01,
          "size_modifier": 1.03
        },
        {
          "fish_id": "dog_snapper",
          "base_ratio": 0.04,
          "size_modifier": 1.03
        },
        {
          "fish_id": "cubera_snapper",
          "base_ratio": 0.018,
          "size_modifier": 1.04
        },
        {
          "fish_id": "blackfin_tuna",
          "base_ratio": 0.04,
          "size_modifier": 1.02
        },
        {
          "fish_id": "giant_spanish_mackerel",
          "base_ratio": 0.03,
          "size_modifier": 1.04
        },
        {
          "fish_id": "reef_mola",
          "base_ratio": 0.004,
          "size_modifier": 1
        },
        {
          "fish_id": "giant_trevally",
          "base_ratio": 0.045,
          "size_modifier": 1.05
        },
        {
          "fish_id": "wahoo",
          "base_ratio": 0.045,
          "size_modifier": 1.06
        },
        {
          "fish_id": "mahi_mahi",
          "base_ratio": 0.055,
          "size_modifier": 1.05
        }
      ],
      "spots": [],
      "environment_baseline": {
        "wind": 4.8,
        "cloud": 4.4,
        "rain": 0,
        "water_flow": 2.5
      },
      "recommended_styles": [
        "bottom_rod",
        "lure_rod"
      ],
      "guide": "先用重底钓探深槽和潮壁，再用 60g+ 铁板与大型波扒追巡游群。"
    }
  ],
  "weather_presets": [
    {
      "id": "clear_sunny",
      "name": "晴天",
      "wind_range": [
        0,
        2
      ],
      "cloud_range": [
        0,
        2
      ],
      "rain_range": [
        0,
        0
      ],
      "water_flow_delta": -0.1,
      "visibility_factor": 1.2,
      "fish_activity_factor": 0.85
    },
    {
      "id": "overcast_calm",
      "name": "阴天微风",
      "wind_range": [
        0.5,
        2
      ],
      "cloud_range": [
        6,
        9
      ],
      "rain_range": [
        0,
        0
      ],
      "water_flow_delta": 0,
      "visibility_factor": 0.75,
      "fish_activity_factor": 1.15
    },
    {
      "id": "light_rain",
      "name": "小雨",
      "wind_range": [
        1,
        3
      ],
      "cloud_range": [
        7,
        10
      ],
      "rain_range": [
        0.5,
        2
      ],
      "water_flow_delta": 0.2,
      "visibility_factor": 0.6,
      "fish_activity_factor": 1.12
    },
    {
      "id": "heavy_rain",
      "name": "大雨",
      "wind_range": [
        4,
        7
      ],
      "cloud_range": [
        9,
        10
      ],
      "rain_range": [
        4,
        12
      ],
      "water_flow_delta": 0.8,
      "visibility_factor": 0.35,
      "fish_activity_factor": 0.55
    },
    {
      "id": "foggy_morning",
      "name": "晨雾",
      "wind_range": [
        0,
        1
      ],
      "cloud_range": [
        3,
        7
      ],
      "rain_range": [
        0,
        0
      ],
      "water_flow_delta": 0,
      "visibility_factor": 0.4,
      "fish_activity_factor": 1.3
    },
    {
      "id": "strong_wind",
      "name": "大风",
      "wind_range": [
        6,
        10
      ],
      "cloud_range": [
        2,
        8
      ],
      "rain_range": [
        0,
        0.5
      ],
      "water_flow_delta": 0.5,
      "visibility_factor": 0.9,
      "fish_activity_factor": 0.7
    }
  ],
  "fish": [
    {
      "id": "gudgeon",
      "name": "棒花鱼",
      "species": "Abbottina rivularis",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 6,
      "size_max_cm": 18,
      "weight_min_kg": 0.004,
      "weight_max_kg": 0.05,
      "strength": 1.6,
      "endurance": 1.74,
      "agility": 2.16,
      "alertness": 1.8,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": -0.14,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "urban_canal",
        "river_mountain",
        "canyon_run"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "sharpbelly",
      "name": "餐条",
      "species": "Hemiculter leucisculus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 29,
      "weight_min_kg": 0.012,
      "weight_max_kg": 0.232,
      "strength": 1.4,
      "endurance": 1.56,
      "agility": 2.04,
      "alertness": 1.7,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.05,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "lotus_marsh",
        "sea_estuary",
        "mangrove_flat",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "grass_carp",
      "name": "草鱼",
      "species": "Ctenopharyngodon idella",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 25,
      "size_max_cm": 150,
      "weight_min_kg": 0.5,
      "weight_max_kg": 45,
      "strength": 3,
      "endurance": 2.8,
      "agility": 2,
      "alertness": 1.8,
      "bait_preference": "grass",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.94,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "weather_loach",
      "name": "大鳞泥鳅",
      "species": "Paramisgurnus dabryanus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 10,
      "size_max_cm": 21.5,
      "weight_min_kg": 0.014,
      "weight_max_kg": 0.058,
      "strength": 2.4000000000000004,
      "endurance": 2.46,
      "agility": 2.64,
      "alertness": 2.2,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.09,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "urban_canal",
        "river_mountain",
        "canyon_run",
        "reservoir_dam",
        "quarry_lake"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "freshwater_drum",
      "name": "淡水石首鱼",
      "species": "Aplodinotus grunniens",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 16,
      "size_max_cm": 95,
      "weight_min_kg": 0.283,
      "weight_max_kg": 24.7,
      "strength": 2,
      "endurance": 2.0999999999999996,
      "agility": 2.4,
      "alertness": 2,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.48,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "yellow_catfish",
      "name": "黄颡鱼",
      "species": "Pelteobagrus fulvidraco",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 34.5,
      "weight_min_kg": 0.009,
      "weight_max_kg": 0.3,
      "strength": 1.8,
      "endurance": 1.8,
      "agility": 2,
      "alertness": 1.8,
      "bait_preference": "worm",
      "bite_hours": [
        19,
        20,
        21,
        22
      ],
      "water_layer": "deep",
      "offshore_preference": -0.01,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "river_mountain",
        "reservoir_dam",
        "quarry_lake",
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "crucian_carp",
      "name": "鲫鱼",
      "species": "Carassius auratus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 48,
      "weight_min_kg": 0.018,
      "weight_max_kg": 1.6,
      "strength": 1.2,
      "endurance": 1.5,
      "agility": 1.3,
      "alertness": 2,
      "bait_preference": "worm",
      "bite_hours": [
        5,
        6,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.09,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "river_mountain",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "bluegill",
      "name": "蓝鳃太阳鱼",
      "species": "Lepomis macrochirus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 35,
      "weight_min_kg": 0.03,
      "weight_max_kg": 1.1,
      "strength": 1.3,
      "endurance": 1.4,
      "agility": 2.2,
      "alertness": 2.1,
      "bait_preference": "insect",
      "bite_hours": [
        7,
        8,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.01,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "urban_canal",
        "canyon_run",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "common_carp",
      "name": "鲤鱼",
      "species": "Cyprinus carpio",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 18,
      "size_max_cm": 120,
      "weight_min_kg": 0.325,
      "weight_max_kg": 40.1,
      "strength": 3.5,
      "endurance": 3,
      "agility": 2.2,
      "alertness": 2.5,
      "bait_preference": "corn",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.67,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "silver_carp",
      "name": "鲢鱼",
      "species": "Hypophthalmichthys molitrix",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 25,
      "size_max_cm": 120,
      "weight_min_kg": 1.085,
      "weight_max_kg": 50,
      "strength": 2.8,
      "endurance": 3.2,
      "agility": 3.5,
      "alertness": 1.5,
      "bait_preference": "algae_paste",
      "bite_hours": [
        8,
        9,
        10,
        14,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 0.72,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "lotus_marsh",
        "boat_bailu_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "tilapia",
      "name": "罗非鱼",
      "species": "Oreochromis niloticus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 10,
      "size_max_cm": 60,
      "weight_min_kg": 0.048,
      "weight_max_kg": 4.3,
      "strength": 1.8,
      "endurance": 2,
      "agility": 2.2,
      "alertness": 1.5,
      "bait_preference": "corn",
      "bite_hours": [
        8,
        9,
        14,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 0.19,
      "migration_habit": "resident",
      "regions": [
        "urban_canal",
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "barbel_chub",
      "name": "马口鱼",
      "species": "Opsariichthys bidens",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 26.1,
      "weight_min_kg": 0.018,
      "weight_max_kg": 0.261,
      "strength": 1.2,
      "endurance": 1.38,
      "agility": 1.92,
      "alertness": 1.6,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.07,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "river_mountain",
        "canyon_run"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "topmouth_gudgeon",
      "name": "麦穗鱼",
      "species": "Pseudorasbora parva",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 4.5,
      "size_max_cm": 12.5,
      "weight_min_kg": 0.002,
      "weight_max_kg": 0.018,
      "strength": 0.45,
      "endurance": 0.65,
      "agility": 1.7,
      "alertness": 2,
      "bait_preference": "worm",
      "bite_hours": [
        8,
        9,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": -0.19,
      "migration_habit": "resident",
      "regions": [
        "pond_village",
        "lake_reed",
        "urban_canal",
        "river_mountain"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "loach",
      "name": "泥鳅",
      "species": "Misgurnus anguillicaudatus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 9,
      "size_max_cm": 28,
      "weight_min_kg": 0.014,
      "weight_max_kg": 0.18,
      "strength": 0.65,
      "endurance": 1,
      "agility": 2,
      "alertness": 1.8,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": -0.05,
      "migration_habit": "resident",
      "regions": [
        "pond_village",
        "river_lower",
        "lake_reed",
        "urban_canal",
        "river_mountain",
        "lotus_marsh"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "bitterling",
      "name": "鳑鲏",
      "species": "Rhodeus ocellatus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 3.5,
      "size_max_cm": 9.2,
      "weight_min_kg": 0.002,
      "weight_max_kg": 0.02,
      "strength": 0.35,
      "endurance": 0.55,
      "agility": 1.8,
      "alertness": 2.3,
      "bait_preference": "worm",
      "bite_hours": [
        8,
        9,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": -0.22,
      "migration_habit": "resident",
      "regions": [
        "pond_village",
        "river_lower",
        "lake_reed",
        "river_mountain"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "medaka",
      "name": "青鳉",
      "species": "Oryzias latipes",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 2,
      "size_max_cm": 4,
      "weight_min_kg": 0.001,
      "weight_max_kg": 0.002,
      "strength": 0.1,
      "endurance": 0.2,
      "agility": 1.4,
      "alertness": 1.2,
      "bait_preference": "worm",
      "bite_hours": [
        9,
        10,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": -0.27,
      "migration_habit": "resident",
      "regions": [
        "pond_village",
        "urban_canal",
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "mosquitofish",
      "name": "食蚊鱼",
      "species": "Gambusia affinis",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 2.5,
      "size_max_cm": 7,
      "weight_min_kg": 0.001,
      "weight_max_kg": 0.005,
      "strength": 0.1,
      "endurance": 0.2,
      "agility": 1.6,
      "alertness": 1,
      "bait_preference": "worm",
      "bite_hours": [
        9,
        10,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": -0.25,
      "migration_habit": "resident",
      "regions": [
        "pond_village",
        "urban_canal",
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "white_amur_bream",
      "name": "团头鲂",
      "species": "Megalobrama amblycephala",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 15,
      "size_max_cm": 78,
      "weight_min_kg": 0.205,
      "weight_max_kg": 12,
      "strength": 1.4,
      "endurance": 1.6,
      "agility": 1.8,
      "alertness": 2.2,
      "bait_preference": "corn",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.35,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "young_crucian_carp",
      "name": "小鲫鱼",
      "species": "Carassius auratus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 6,
      "size_max_cm": 26,
      "weight_min_kg": 0.011,
      "weight_max_kg": 1.05,
      "strength": 1.1,
      "endurance": 1.25,
      "agility": 1.4,
      "alertness": 2.1,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": -0.09,
      "migration_habit": "resident",
      "regions": [
        "pond_village"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "silver_crucian_carp",
      "name": "银鲫",
      "species": "Carassius gibelio",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 46.6,
      "weight_min_kg": 0.036,
      "weight_max_kg": 3,
      "strength": 1,
      "endurance": 1.2,
      "agility": 1.8,
      "alertness": 1.5,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 0.08,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "quarry_lake",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "bighead_carp",
      "name": "鳙鱼",
      "species": "Hypophthalmichthys nobilis",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 30,
      "size_max_cm": 146,
      "weight_min_kg": 0.833,
      "weight_max_kg": 40,
      "strength": 3.6,
      "endurance": 3.5,
      "agility": 2.8,
      "alertness": 1.6,
      "bait_preference": "algae_paste",
      "bite_hours": [
        8,
        9,
        14,
        15
      ],
      "water_layer": "surface",
      "offshore_preference": 0.94,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "snakehead_murrel",
      "name": "月鳢",
      "species": "Channa asiatica",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 9,
      "size_max_cm": 23.5,
      "weight_min_kg": 0.015,
      "weight_max_kg": 0.114,
      "strength": 1.8,
      "endurance": 1.92,
      "agility": 2.2800000000000002,
      "alertness": 1.9,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.08,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "urban_canal"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "river_goby",
      "name": "子陵吻虾虎鱼",
      "species": "Rhinogobius giurinus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 3.5,
      "size_max_cm": 12.1,
      "weight_min_kg": 0.001,
      "weight_max_kg": 0.015,
      "strength": 2.2,
      "endurance": 2.2800000000000002,
      "agility": 2.52,
      "alertness": 2.1,
      "bait_preference": "worm",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": -0.2,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal",
        "river_mountain",
        "canyon_run",
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "bass_largemouth",
      "name": "大口黑鲈",
      "species": "Micropterus salmoides",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 97,
      "weight_min_kg": 0.155,
      "weight_max_kg": 10.1,
      "strength": 3.2,
      "endurance": 2.5,
      "agility": 4,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.51,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "catfish",
      "name": "鲶鱼",
      "species": "Silurus asotus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 130,
      "weight_min_kg": 0.191,
      "weight_max_kg": 30,
      "strength": 4,
      "endurance": 3.5,
      "agility": 2.8,
      "alertness": 1.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        20,
        21,
        22,
        23,
        0,
        1,
        2
      ],
      "water_layer": "deep",
      "offshore_preference": 0.74,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_bailu_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "topmouth_culter",
      "name": "翘嘴鲌",
      "species": "Culter alburnus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 92.8,
      "weight_min_kg": 0.098,
      "weight_max_kg": 5.6,
      "strength": 2.8,
      "endurance": 2.2,
      "agility": 4.5,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.48,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "river_mountain",
        "canyon_run",
        "reservoir_dam",
        "quarry_lake",
        "boat_bailu_lake"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "black_carp",
      "name": "青鱼",
      "species": "Mylopharyngodon piceus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 35,
      "size_max_cm": 180,
      "weight_min_kg": 0.618,
      "weight_max_kg": 35,
      "strength": 4.2,
      "endurance": 3.8,
      "agility": 2.5,
      "alertness": 2,
      "bait_preference": "snail",
      "bite_hours": [
        7,
        8,
        9,
        16,
        17,
        18
      ],
      "water_layer": "deep",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_bailu_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "japanese_eel",
      "name": "日本鳗鲡",
      "species": "Anguilla japonica",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 130,
      "weight_min_kg": 0.08,
      "weight_max_kg": 4.8,
      "strength": 2.6,
      "endurance": 3.4,
      "agility": 2.4,
      "alertness": 2.3,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        22,
        23
      ],
      "water_layer": "deep",
      "offshore_preference": 1.21,
      "migration_habit": "migratory",
      "regions": [
        "river_lower",
        "lotus_marsh"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "northern_snakehead",
      "name": "乌鳢",
      "species": "Channa argus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 100,
      "weight_min_kg": 0.112,
      "weight_max_kg": 8,
      "strength": 4.2,
      "endurance": 3.8,
      "agility": 3.5,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.53,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "reservoir_dam",
        "quarry_lake",
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "chinese_mahseer",
      "name": "光唇鱼",
      "species": "Acrossocheilus fasciatus",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 95,
      "weight_min_kg": 0.15,
      "weight_max_kg": 12,
      "strength": 3.8,
      "endurance": 3.4,
      "agility": 4.3,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.94,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "mandarin_fish",
      "name": "鳜鱼",
      "species": "Siniperca chuatsi",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 16,
      "size_max_cm": 70,
      "weight_min_kg": 0.229,
      "weight_max_kg": 8,
      "strength": 3.8,
      "endurance": 3,
      "agility": 4.2,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        22,
        5,
        6
      ],
      "water_layer": "mid",
      "offshore_preference": 0.3,
      "migration_habit": "resident",
      "regions": [
        "river_mountain",
        "canyon_run",
        "reservoir_dam",
        "quarry_lake",
        "boat_bailu_lake"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "brown_trout",
      "name": "褐鳟",
      "species": "Salmo trutta",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 140,
      "weight_min_kg": 0.255,
      "weight_max_kg": 50,
      "strength": 3.5,
      "endurance": 3,
      "agility": 4,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        19,
        20
      ],
      "water_layer": "mid",
      "offshore_preference": 0.81,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "rainbow_trout",
      "name": "虹鳟",
      "species": "Oncorhynchus mykiss",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 122,
      "weight_min_kg": 0.2,
      "weight_max_kg": 25.9,
      "strength": 3.6,
      "endurance": 3.2,
      "agility": 4.5,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.69,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "zander",
      "name": "梭鲈",
      "species": "Sander lucioperca",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 100,
      "weight_min_kg": 1.296,
      "weight_max_kg": 20,
      "strength": 4,
      "endurance": 3.8,
      "agility": 4.2,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        20,
        21
      ],
      "water_layer": "deep",
      "offshore_preference": 0.61,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "brook_trout",
      "name": "溪红点鲑",
      "species": "Salvelinus fontinalis",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 12,
      "size_max_cm": 86,
      "weight_min_kg": 0.052,
      "weight_max_kg": 8,
      "strength": 2.8,
      "endurance": 2.6,
      "agility": 4.2,
      "alertness": 3,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.39,
      "migration_habit": "resident",
      "regions": [
        "river_mountain",
        "canyon_run",
        "reservoir_dam",
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "longsnout_catfish",
      "name": "长吻鮠",
      "species": "Leiocassis longirostris",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 25,
      "size_max_cm": 160,
      "weight_min_kg": 0.25,
      "weight_max_kg": 22,
      "strength": 4.4,
      "endurance": 4,
      "agility": 2.7,
      "alertness": 1.9,
      "bait_preference": "small_fish",
      "bite_hours": [
        18,
        19,
        20,
        21,
        22
      ],
      "water_layer": "deep",
      "offshore_preference": 1.01,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "amur_catfish",
      "name": "怀头鲶",
      "species": "Silurus soldatovi",
      "water_type": "freshwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 220,
      "weight_min_kg": 0.822,
      "weight_max_kg": 40,
      "strength": 5,
      "endurance": 4.6,
      "agility": 2.5,
      "alertness": 2.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        21,
        22,
        23,
        0
      ],
      "water_layer": "deep",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "giant_snakehead",
      "name": "巨型乌鳢",
      "species": "Channa marulius",
      "water_type": "freshwater",
      "rarity": "legendary",
      "size_min_cm": 35,
      "size_max_cm": 183,
      "weight_min_kg": 0.504,
      "weight_max_kg": 30,
      "strength": 4.8,
      "endurance": 4.5,
      "agility": 4.8,
      "alertness": 4,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        5,
        6
      ],
      "water_layer": "surface",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "reservoir_dam",
        "quarry_lake",
        "lotus_marsh",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "asian_arowana",
      "name": "亚洲龙鱼",
      "species": "Scleropages formosus",
      "water_type": "freshwater",
      "rarity": "legendary",
      "size_min_cm": 35,
      "size_max_cm": 90,
      "weight_min_kg": 1.016,
      "weight_max_kg": 7.2,
      "strength": 4.5,
      "endurance": 4.2,
      "agility": 3.8,
      "alertness": 4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.58,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "mud_carp",
      "name": "鲮鱼",
      "species": "Cirrhinus molitorella",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 12,
      "size_max_cm": 80,
      "weight_min_kg": 0.03,
      "weight_max_kg": 15,
      "strength": 2,
      "endurance": 2.2,
      "agility": 2,
      "alertness": 1.7,
      "bait_preference": "corn",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.34,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "wuchang_bream",
      "name": "武昌鱼",
      "species": "Megalobrama amblycephala",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 14,
      "size_max_cm": 65,
      "weight_min_kg": 0.08,
      "weight_max_kg": 5.5,
      "strength": 1.8,
      "endurance": 2,
      "agility": 1.8,
      "alertness": 2.1,
      "bait_preference": "corn",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.25,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "reservoir_dam",
        "lotus_marsh",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "tench",
      "name": "丁鱥",
      "species": "Tinca tinca",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 10,
      "size_max_cm": 70,
      "weight_min_kg": 0.03,
      "weight_max_kg": 7.5,
      "strength": 1.9,
      "endurance": 2.5,
      "agility": 1.6,
      "alertness": 2,
      "bait_preference": "paste",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.26,
      "migration_habit": "resident",
      "regions": [
        "river_lower",
        "lake_reed",
        "urban_canal"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "yellow_perch",
      "name": "黄鲈",
      "species": "Perca flavescens",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 50,
      "weight_min_kg": 0.01,
      "weight_max_kg": 1.9,
      "strength": 1.6,
      "endurance": 1.8,
      "agility": 2.8,
      "alertness": 2.3,
      "bait_preference": "insect",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.1,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "river_mountain",
        "canyon_run"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "eurasian_perch",
      "name": "河鲈",
      "species": "Perca fluviatilis",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 10,
      "size_max_cm": 60,
      "weight_min_kg": 0.02,
      "weight_max_kg": 4.8,
      "strength": 2,
      "endurance": 2.1,
      "agility": 3,
      "alertness": 2.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.19,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "river_mountain"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "pumpkinseed",
      "name": "南瓜籽太阳鱼",
      "species": "Lepomis gibbosus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 6,
      "size_max_cm": 30,
      "weight_min_kg": 0.008,
      "weight_max_kg": 0.7,
      "strength": 1.2,
      "endurance": 1.3,
      "agility": 2.4,
      "alertness": 2.2,
      "bait_preference": "insect",
      "bite_hours": [
        7,
        8,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": -0.06,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "urban_canal",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "redear_sunfish",
      "name": "红耳太阳鱼",
      "species": "Lepomis microlophus",
      "water_type": "freshwater",
      "rarity": "common",
      "size_min_cm": 8,
      "size_max_cm": 40,
      "weight_min_kg": 0.015,
      "weight_max_kg": 1.8,
      "strength": 1.4,
      "endurance": 1.5,
      "agility": 2.3,
      "alertness": 2.1,
      "bait_preference": "snail",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.03,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "urban_canal",
        "boat_bailu_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "channel_catfish",
      "name": "沟鲶",
      "species": "Ictalurus punctatus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 15,
      "size_max_cm": 132,
      "weight_min_kg": 0.08,
      "weight_max_kg": 26,
      "strength": 3.8,
      "endurance": 3.6,
      "agility": 2.4,
      "alertness": 1.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        20,
        21,
        22,
        23,
        0,
        1
      ],
      "water_layer": "deep",
      "offshore_preference": 0.74,
      "migration_habit": "resident",
      "regions": [
        "urban_canal",
        "lotus_marsh"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "blue_catfish",
      "name": "蓝鲶",
      "species": "Ictalurus furcatus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 165,
      "weight_min_kg": 0.15,
      "weight_max_kg": 45,
      "strength": 4.6,
      "endurance": 4.2,
      "agility": 2.3,
      "alertness": 1.7,
      "bait_preference": "small_fish",
      "bite_hours": [
        20,
        21,
        22,
        23,
        0
      ],
      "water_layer": "deep",
      "offshore_preference": 1.01,
      "migration_habit": "resident",
      "regions": [
        "lotus_marsh",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "spotted_gar",
      "name": "斑点雀鳝",
      "species": "Lepisosteus oculatus",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 112,
      "weight_min_kg": 0.09,
      "weight_max_kg": 5.5,
      "strength": 3,
      "endurance": 2.8,
      "agility": 3.3,
      "alertness": 2.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 0.61,
      "migration_habit": "resident",
      "regions": [
        "lake_reed",
        "quarry_lake",
        "lotus_marsh"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "yellowcheek",
      "name": "鳡鱼",
      "species": "Elopichthys bambusa",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 22,
      "size_max_cm": 180,
      "weight_min_kg": 0.2,
      "weight_max_kg": 32,
      "strength": 4.4,
      "endurance": 3.7,
      "agility": 4.6,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 1.5,
      "migration_habit": "migratory",
      "regions": [
        "river_mountain",
        "canyon_run",
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "smallmouth_bass",
      "name": "小口黑鲈",
      "species": "Micropterus dolomieu",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 69,
      "weight_min_kg": 0.12,
      "weight_max_kg": 5.4,
      "strength": 3,
      "endurance": 2.7,
      "agility": 4.1,
      "alertness": 2.9,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.31,
      "migration_habit": "resident",
      "regions": [
        "river_mountain",
        "reservoir_dam"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "white_bass",
      "name": "白鲈",
      "species": "Morone chrysops",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 16,
      "size_max_cm": 46,
      "weight_min_kg": 0.08,
      "weight_max_kg": 3.2,
      "strength": 2.4,
      "endurance": 2.1,
      "agility": 3.8,
      "alertness": 2.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.58,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "striped_bass",
      "name": "条纹鲈",
      "species": "Morone saxatilis",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 25,
      "size_max_cm": 130,
      "weight_min_kg": 0.4,
      "weight_max_kg": 31,
      "strength": 4.2,
      "endurance": 4,
      "agility": 3.7,
      "alertness": 3,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 1.24,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "burbot",
      "name": "江鳕",
      "species": "Lota lota",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 120,
      "weight_min_kg": 0.06,
      "weight_max_kg": 18,
      "strength": 3.2,
      "endurance": 3.2,
      "agility": 2.2,
      "alertness": 2.1,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        22,
        23
      ],
      "water_layer": "deep",
      "offshore_preference": 0.67,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "kokanee_salmon",
      "name": "陆封红鲑",
      "species": "Oncorhynchus nerka",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 60,
      "weight_min_kg": 0.08,
      "weight_max_kg": 3.5,
      "strength": 2.6,
      "endurance": 2.4,
      "agility": 4,
      "alertness": 2.8,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.69,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "masu_salmon",
      "name": "樱鳟",
      "species": "Oncorhynchus masou",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 80,
      "weight_min_kg": 0.08,
      "weight_max_kg": 9.5,
      "strength": 3.4,
      "endurance": 2.8,
      "agility": 4.3,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 0.84,
      "migration_habit": "migratory",
      "regions": [
        "river_mountain",
        "canyon_run"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "cutthroat_trout",
      "name": "割喉鳟",
      "species": "Oncorhynchus clarkii",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 16,
      "size_max_cm": 102,
      "weight_min_kg": 0.05,
      "weight_max_kg": 11,
      "strength": 3.2,
      "endurance": 2.9,
      "agility": 4.1,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.53,
      "migration_habit": "resident",
      "regions": [
        "river_mountain",
        "canyon_run",
        "quarry_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "northern_pike",
      "name": "北方狗鱼",
      "species": "Esox lucius",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 25,
      "size_max_cm": 150,
      "weight_min_kg": 0.3,
      "weight_max_kg": 25,
      "strength": 4.4,
      "endurance": 3.8,
      "agility": 4.5,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.94,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "clown_knifefish",
      "name": "小丑刀鱼",
      "species": "Chitala ornata",
      "water_type": "freshwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 100,
      "weight_min_kg": 0.15,
      "weight_max_kg": 8.5,
      "strength": 3.3,
      "endurance": 3,
      "agility": 3.8,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        22
      ],
      "water_layer": "mid",
      "offshore_preference": 0.54,
      "migration_habit": "resident",
      "regions": [
        "urban_canal",
        "quarry_lake",
        "lotus_marsh"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "peacock_bass",
      "name": "孔雀鲈",
      "species": "Cichla ocellaris",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 83,
      "weight_min_kg": 0.2,
      "weight_max_kg": 11,
      "strength": 4,
      "endurance": 3.2,
      "agility": 4.6,
      "alertness": 3.1,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.41,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "lotus_marsh"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "muskellunge",
      "name": "麝香狗鱼",
      "species": "Esox masquinongy",
      "water_type": "freshwater",
      "rarity": "epic",
      "size_min_cm": 35,
      "size_max_cm": 160,
      "weight_min_kg": 0.6,
      "weight_max_kg": 32,
      "strength": 4.8,
      "endurance": 4.2,
      "agility": 4.4,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "paddlefish",
      "name": "匙吻鲟",
      "species": "Polyodon spathula",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 190,
      "weight_min_kg": 0.4,
      "weight_max_kg": 40,
      "strength": 3.8,
      "endurance": 4,
      "agility": 2.9,
      "alertness": 1.8,
      "bait_preference": "algae_paste",
      "bite_hours": [
        8,
        9,
        10,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 1.5,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "siberian_sturgeon",
      "name": "西伯利亚鲟",
      "species": "Acipenser baerii",
      "water_type": "freshwater",
      "rarity": "epic",
      "size_min_cm": 35,
      "size_max_cm": 200,
      "weight_min_kg": 0.5,
      "weight_max_kg": 65,
      "strength": 4.8,
      "endurance": 4.6,
      "agility": 2.1,
      "alertness": 2,
      "bait_preference": "snail",
      "bite_hours": [
        6,
        7,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.5,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "wels_catfish",
      "name": "欧鲶",
      "species": "Silurus glanis",
      "water_type": "freshwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 240,
      "weight_min_kg": 0.8,
      "weight_max_kg": 80,
      "strength": 5.2,
      "endurance": 4.8,
      "agility": 2.4,
      "alertness": 2,
      "bait_preference": "small_fish",
      "bite_hours": [
        20,
        21,
        22,
        23,
        0
      ],
      "water_layer": "deep",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "lotus_marsh",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "lake_trout",
      "name": "湖鳟",
      "species": "Salvelinus namaycush",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 22,
      "size_max_cm": 150,
      "weight_min_kg": 0.15,
      "weight_max_kg": 32,
      "strength": 4.2,
      "endurance": 3.8,
      "agility": 4,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        16,
        17
      ],
      "water_layer": "deep",
      "offshore_preference": 0.91,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "arctic_char",
      "name": "北极红点鲑",
      "species": "Salvelinus alpinus",
      "water_type": "freshwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 87,
      "weight_min_kg": 0.06,
      "weight_max_kg": 7.5,
      "strength": 3,
      "endurance": 2.7,
      "agility": 4.2,
      "alertness": 3.1,
      "bait_preference": "shrimp",
      "bite_hours": [
        5,
        6,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.44,
      "migration_habit": "resident",
      "regions": [
        "canyon_run",
        "quarry_lake"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "taimen",
      "name": "哲罗鱼",
      "species": "Hucho taimen",
      "water_type": "freshwater",
      "rarity": "legendary",
      "size_min_cm": 45,
      "size_max_cm": 210,
      "weight_min_kg": 1,
      "weight_max_kg": 50,
      "strength": 5,
      "endurance": 4.5,
      "agility": 4.6,
      "alertness": 3.7,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 1.5,
      "migration_habit": "migratory",
      "regions": [
        "canyon_run",
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "lake_sturgeon",
      "name": "湖鲟",
      "species": "Acipenser fulvescens",
      "water_type": "freshwater",
      "rarity": "epic",
      "size_min_cm": 50,
      "size_max_cm": 240,
      "weight_min_kg": 1.2,
      "weight_max_kg": 90,
      "strength": 5,
      "endurance": 4.9,
      "agility": 2,
      "alertness": 2.1,
      "bait_preference": "shellfish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.5,
      "migration_habit": "migratory",
      "regions": [
        "reservoir_dam",
        "boat_shimen_reservoir"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "alligator_gar",
      "name": "鳄雀鳝",
      "species": "Atractosteus spatula",
      "water_type": "freshwater",
      "rarity": "legendary",
      "size_min_cm": 40,
      "size_max_cm": 240,
      "weight_min_kg": 1.2,
      "weight_max_kg": 120,
      "strength": 5.3,
      "endurance": 4.8,
      "agility": 3.6,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "quarry_lake",
        "lotus_marsh"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "filefish",
      "name": "绿鳍马面鲀",
      "species": "Thamnaconus modestus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 12,
      "size_max_cm": 37.4,
      "weight_min_kg": 0.095,
      "weight_max_kg": 1.2,
      "strength": 1.5,
      "endurance": 1.4,
      "agility": 2.2,
      "alertness": 2,
      "bait_preference": "shrimp",
      "bite_hours": [
        8,
        9,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 0.39,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "japanese_mackerel",
      "name": "鲐鱼",
      "species": "Scomber japonicus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 18,
      "size_max_cm": 64,
      "weight_min_kg": 0.155,
      "weight_max_kg": 2.9,
      "strength": 2,
      "endurance": 2,
      "agility": 4.2,
      "alertness": 2.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 0.62,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "boat_baijiao_nearshore",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "needlefish_longtom",
      "name": "鱵鱼",
      "species": "Strongylura anastomella",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 18,
      "size_max_cm": 110,
      "weight_min_kg": 0.03,
      "weight_max_kg": 2.8,
      "strength": 1.9,
      "endurance": 2.1,
      "agility": 4.6,
      "alertness": 2.9,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.4,
      "migration_habit": "migratory",
      "regions": [
        "sea_estuary",
        "breakwater_pier"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "mullet",
      "name": "鲻鱼",
      "species": "Mugil cephalus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 20,
      "size_max_cm": 100,
      "weight_min_kg": 0.23,
      "weight_max_kg": 12,
      "strength": 2.8,
      "endurance": 2.8,
      "agility": 3,
      "alertness": 2.8,
      "bait_preference": "algae_paste",
      "bite_hours": [
        8,
        9,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 0.89,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "offshore_reef",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "flounder",
      "name": "比目鱼",
      "species": "Platichthys stellatus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 91,
      "weight_min_kg": 0.169,
      "weight_max_kg": 9.1,
      "strength": 2.5,
      "endurance": 2,
      "agility": 2.8,
      "alertness": 2,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 0.81,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "largehead_hairtail",
      "name": "带鱼",
      "species": "Trichiurus lepturus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 45,
      "size_max_cm": 234,
      "weight_min_kg": 0.085,
      "weight_max_kg": 5,
      "strength": 2.5,
      "endurance": 2.4,
      "agility": 4,
      "alertness": 2.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        19,
        20,
        21,
        22
      ],
      "water_layer": "mid",
      "offshore_preference": 1.4,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "offshore_reef",
        "seamount_edge"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "black_porgy",
      "name": "黑鲷",
      "species": "Acanthopagrus schlegelii",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 14,
      "size_max_cm": 50,
      "weight_min_kg": 0.169,
      "weight_max_kg": 3.2,
      "strength": 2.8,
      "endurance": 2.8,
      "agility": 3.2,
      "alertness": 3.5,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.49,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "snapper_red",
      "name": "红笛鲷",
      "species": "Lutjanus erythropterus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 18,
      "size_max_cm": 95,
      "weight_min_kg": 0.2,
      "weight_max_kg": 10,
      "strength": 3.6,
      "endurance": 3.5,
      "agility": 3.1,
      "alertness": 3,
      "bait_preference": "crab",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 0.84,
      "migration_habit": "resident",
      "regions": [
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "red_drum",
      "name": "红鱼",
      "species": "Sciaenops ocellatus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 25,
      "size_max_cm": 155,
      "weight_min_kg": 0.453,
      "weight_max_kg": 45,
      "strength": 3.5,
      "endurance": 3,
      "agility": 3.2,
      "alertness": 2.5,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        17,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 1.77,
      "migration_habit": "migratory",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "offshore_reef",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "golden_pompano",
      "name": "金鲳鱼",
      "species": "Trachinotus blochii",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 15,
      "size_max_cm": 70,
      "weight_min_kg": 0.15,
      "weight_max_kg": 6,
      "strength": 3,
      "endurance": 2.8,
      "agility": 4.1,
      "alertness": 2.8,
      "bait_preference": "shrimp",
      "bite_hours": [
        7,
        8,
        9,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.09,
      "migration_habit": "migratory",
      "regions": [
        "mangrove_flat",
        "breakwater_pier",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "chinese_perch",
      "name": "鲈鱼",
      "species": "Lateolabrax maculatus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 102,
      "weight_min_kg": 0.157,
      "weight_max_kg": 8.7,
      "strength": 3.5,
      "endurance": 3,
      "agility": 4,
      "alertness": 3,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 0.91,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "white_spotted_conger",
      "name": "星鳗",
      "species": "Conger myriaster",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 35,
      "size_max_cm": 100,
      "weight_min_kg": 0.257,
      "weight_max_kg": 2.5,
      "strength": 2.6,
      "endurance": 2.8,
      "agility": 2.5,
      "alertness": 2.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        20,
        21,
        22,
        23
      ],
      "water_layer": "deep",
      "offshore_preference": 1,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "rockfish",
      "name": "许氏平鲉",
      "species": "Sebastes schlegelii",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 16,
      "size_max_cm": 65,
      "weight_min_kg": 0.111,
      "weight_max_kg": 3.1,
      "strength": 2.8,
      "endurance": 2.6,
      "agility": 2.5,
      "alertness": 2.5,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 0.61,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "boat_baijiao_nearshore",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "yellow_croaker",
      "name": "大黄鱼",
      "species": "Larimichthys crocea",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 80,
      "weight_min_kg": 0.178,
      "weight_max_kg": 6.5,
      "strength": 2.8,
      "endurance": 2.5,
      "agility": 3.2,
      "alertness": 3,
      "bait_preference": "shrimp",
      "bite_hours": [
        18,
        19,
        20,
        21
      ],
      "water_layer": "mid",
      "offshore_preference": 0.74,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "brown_grouper",
      "name": "褐点石斑鱼",
      "species": "Epinephelus fuscoguttatus",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 20,
      "size_max_cm": 140,
      "weight_min_kg": 0.3,
      "weight_max_kg": 26,
      "strength": 4.8,
      "endurance": 4.4,
      "agility": 2.7,
      "alertness": 2.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.18,
      "migration_habit": "resident",
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "amberjack",
      "name": "黄尾鰤",
      "species": "Seriola lalandi",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 170,
      "weight_min_kg": 0.8,
      "weight_max_kg": 48,
      "strength": 5,
      "endurance": 4.6,
      "agility": 4.3,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "spanish_mackerel",
      "name": "马鲛鱼",
      "species": "Scomberomorus niphonius",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 113,
      "weight_min_kg": 0.359,
      "weight_max_kg": 8,
      "strength": 4,
      "endurance": 3.5,
      "agility": 4.8,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.06,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "barracuda",
      "name": "梭鱼",
      "species": "Sphyraena pinguis",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 18,
      "size_max_cm": 50,
      "weight_min_kg": 0.09,
      "weight_max_kg": 0.8,
      "strength": 3.8,
      "endurance": 3.2,
      "agility": 4.8,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19
      ],
      "water_layer": "surface",
      "offshore_preference": 0.52,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "olive_flounder",
      "name": "牙鲆",
      "species": "Paralichthys olivaceus",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 22,
      "size_max_cm": 103,
      "weight_min_kg": 0.213,
      "weight_max_kg": 9.1,
      "strength": 3,
      "endurance": 2.8,
      "agility": 3,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.93,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "mahi_mahi",
      "name": "鬼头刀",
      "species": "Coryphaena hippurus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 210,
      "weight_min_kg": 0.945,
      "weight_max_kg": 40,
      "strength": 4.6,
      "endurance": 4,
      "agility": 5,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        8,
        9,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 1.4,
      "migration_habit": "resident",
      "regions": [
        "offshore_reef",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "boat_crimson_trench"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "yellowfin_tuna",
      "name": "黄鳍金枪鱼",
      "species": "Thunnus albacares",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 55,
      "size_max_cm": 239,
      "weight_min_kg": 5.85,
      "weight_max_kg": 200,
      "strength": 5,
      "endurance": 4.8,
      "agility": 5,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        7,
        8,
        9,
        15,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "boat_crimson_trench",
        "seamount_edge"
      ],
      "regions": [
        "offshore_reef",
        "seamount_edge",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "skipjack_tuna",
      "name": "鲣鱼",
      "species": "Katsuwonus pelamis",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 35,
      "size_max_cm": 110,
      "weight_min_kg": 2.667,
      "weight_max_kg": 34.5,
      "strength": 4.8,
      "endurance": 4.5,
      "agility": 5,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.07,
      "migration_habit": "resident",
      "regions": [
        "offshore_reef",
        "seamount_edge",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "cobia",
      "name": "军曹鱼",
      "species": "Rachycentron canadum",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 180,
      "weight_min_kg": 1.2,
      "weight_max_kg": 52,
      "strength": 4.9,
      "endurance": 4.4,
      "agility": 3.8,
      "alertness": 3.1,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "bluefin_trevally",
      "name": "蓝鳍鲹",
      "species": "Caranx melampygus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 25,
      "size_max_cm": 120,
      "weight_min_kg": 0.5,
      "weight_max_kg": 20,
      "strength": 4.8,
      "endurance": 4.2,
      "agility": 4.9,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.52,
      "migration_habit": "migratory",
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "dogtooth_tuna",
      "name": "犬牙金枪鱼",
      "species": "Gymnosarda unicolor",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 200,
      "weight_min_kg": 2,
      "weight_max_kg": 90,
      "strength": 5.4,
      "endurance": 5,
      "agility": 5,
      "alertness": 3.7,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "boat_crimson_trench",
        "seamount_edge"
      ],
      "regions": [
        "seamount_edge",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "giant_trevally",
      "name": "巨鲹",
      "species": "Caranx ignobilis",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 40,
      "size_max_cm": 170,
      "weight_min_kg": 1,
      "weight_max_kg": 45,
      "strength": 5.2,
      "endurance": 4.8,
      "agility": 5,
      "alertness": 3.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "kelp_shoal",
        "seamount_edge",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "boat_crimson_trench"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "sailfish_pacific",
      "name": "太平洋旗鱼",
      "species": "Istiophorus platypterus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 60,
      "size_max_cm": 320,
      "weight_min_kg": 5,
      "weight_max_kg": 80,
      "strength": 5.3,
      "endurance": 4.9,
      "agility": 5.2,
      "alertness": 4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "seamount_edge"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "milkfish",
      "name": "虱目鱼",
      "species": "Chanos chanos",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 20,
      "size_max_cm": 180,
      "weight_min_kg": 0.15,
      "weight_max_kg": 14,
      "strength": 2.8,
      "endurance": 3,
      "agility": 4.1,
      "alertness": 2.6,
      "bait_preference": "algae_paste",
      "bite_hours": [
        7,
        8,
        9,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "sea_estuary",
        "mangrove_flat"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "rabbitfish",
      "name": "臭肚鱼",
      "species": "Siganus fuscescens",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 12,
      "size_max_cm": 45,
      "weight_min_kg": 0.05,
      "weight_max_kg": 1.8,
      "strength": 1.8,
      "endurance": 1.8,
      "agility": 2.5,
      "alertness": 2.7,
      "bait_preference": "algae_paste",
      "bite_hours": [
        8,
        9,
        10,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 0.44,
      "migration_habit": "resident",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "threadfin_bream",
      "name": "金线鱼",
      "species": "Nemipterus virgatus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 14,
      "size_max_cm": 40,
      "weight_min_kg": 0.06,
      "weight_max_kg": 1.3,
      "strength": 2,
      "endurance": 1.9,
      "agility": 2.8,
      "alertness": 2.6,
      "bait_preference": "shrimp",
      "bite_hours": [
        5,
        6,
        17,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.42,
      "migration_habit": "resident",
      "regions": [
        "mangrove_flat",
        "breakwater_pier",
        "offshore_reef"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "tarpon_indo_pacific",
      "name": "海鲢",
      "species": "Megalops cyprinoides",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 150,
      "weight_min_kg": 0.2,
      "weight_max_kg": 18,
      "strength": 3.8,
      "endurance": 3.5,
      "agility": 4.8,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "surface",
      "offshore_preference": 1.7,
      "migration_habit": "migratory",
      "regions": [
        "sea_estuary",
        "mangrove_flat",
        "breakwater_pier",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "golden_trevally",
      "name": "金鲹",
      "species": "Gnathanodon speciosus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 20,
      "size_max_cm": 120,
      "weight_min_kg": 0.25,
      "weight_max_kg": 16,
      "strength": 4,
      "endurance": 3.6,
      "agility": 4.4,
      "alertness": 3.2,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 1.49,
      "migration_habit": "migratory",
      "regions": [
        "breakwater_pier",
        "offshore_reef",
        "kelp_shoal",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "bigeye_trevally",
      "name": "大眼鲹",
      "species": "Caranx sexfasciatus",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 25,
      "size_max_cm": 120,
      "weight_min_kg": 0.4,
      "weight_max_kg": 18,
      "strength": 4.2,
      "endurance": 3.8,
      "agility": 4.7,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.52,
      "migration_habit": "migratory",
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "coral_trout",
      "name": "东星斑",
      "species": "Plectropomus leopardus",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 22,
      "size_max_cm": 120,
      "weight_min_kg": 0.2,
      "weight_max_kg": 23,
      "strength": 4.4,
      "endurance": 4,
      "agility": 3.1,
      "alertness": 3,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        17,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.05,
      "migration_habit": "resident",
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "giant_grouper",
      "name": "龙趸",
      "species": "Epinephelus lanceolatus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 250,
      "weight_min_kg": 1,
      "weight_max_kg": 120,
      "strength": 5.4,
      "endurance": 5,
      "agility": 2.2,
      "alertness": 2.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.4,
      "migration_habit": "resident",
      "owned_ship_route_regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "seamount_edge"
      ],
      "regions": [
        "offshore_reef",
        "kelp_shoal",
        "seamount_edge",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "longtail_tuna",
      "name": "长尾金枪鱼",
      "species": "Thunnus tonggol",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 35,
      "size_max_cm": 145,
      "weight_min_kg": 0.8,
      "weight_max_kg": 35,
      "strength": 4.8,
      "endurance": 4.4,
      "agility": 5,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.77,
      "migration_habit": "migratory",
      "regions": [
        "offshore_reef",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "wahoo",
      "name": "竹梭鱼",
      "species": "Acanthocybium solandri",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 210,
      "weight_min_kg": 1.2,
      "weight_max_kg": 50,
      "strength": 5,
      "endurance": 4.5,
      "agility": 5.2,
      "alertness": 3.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.85,
      "migration_habit": "migratory",
      "regions": [
        "offshore_reef",
        "seamount_edge",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore",
        "boat_crimson_trench"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "mangrove_jack",
      "name": "红槽鱼",
      "species": "Lutjanus argentimaculatus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 25,
      "size_max_cm": 120,
      "weight_min_kg": 0.35,
      "weight_max_kg": 16,
      "strength": 4.1,
      "endurance": 3.9,
      "agility": 3.4,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        18,
        19,
        20
      ],
      "water_layer": "mid",
      "offshore_preference": 0.86,
      "migration_habit": "resident",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "bohar_snapper",
      "name": "赤点笛鲷",
      "species": "Lutjanus bohar",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 90,
      "weight_min_kg": 0.55,
      "weight_max_kg": 13,
      "strength": 4.5,
      "endurance": 4.2,
      "agility": 3,
      "alertness": 3.1,
      "bait_preference": "crab",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.12,
      "migration_habit": "resident",
      "regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "green_jobfish",
      "name": "青笛鲷",
      "species": "Aprion virescens",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 28,
      "size_max_cm": 100,
      "weight_min_kg": 0.5,
      "weight_max_kg": 13,
      "strength": 4.4,
      "endurance": 4,
      "agility": 3.5,
      "alertness": 3,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "deep",
      "offshore_preference": 1.28,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "spangled_emperor",
      "name": "星斑裸颊鲷",
      "species": "Lethrinus nebulosus",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 24,
      "size_max_cm": 100,
      "weight_min_kg": 0.35,
      "weight_max_kg": 14,
      "strength": 3.9,
      "endurance": 3.6,
      "agility": 3,
      "alertness": 2.8,
      "bait_preference": "shrimp",
      "bite_hours": [
        5,
        6,
        17,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.92,
      "migration_habit": "resident",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "african_pompano",
      "name": "高体鲳鲹",
      "species": "Alectis ciliaris",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 150,
      "weight_min_kg": 0.8,
      "weight_max_kg": 22,
      "strength": 4.4,
      "endurance": 4,
      "agility": 4.4,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.42,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "queenfish_talang",
      "name": "四指马鲅",
      "species": "Scomberoides commersonnianus",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 35,
      "size_max_cm": 165,
      "weight_min_kg": 0.45,
      "weight_max_kg": 15,
      "strength": 4.1,
      "endurance": 3.8,
      "agility": 4.9,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.18,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "rainbow_runner",
      "name": "虹鲹",
      "species": "Elagatis bipinnulata",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 180,
      "weight_min_kg": 0.8,
      "weight_max_kg": 37,
      "strength": 4.7,
      "endurance": 4.3,
      "agility": 4.8,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.72,
      "migration_habit": "migratory",
      "regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "narrowbarred_mackerel",
      "name": "康氏马鲛",
      "species": "Scomberomorus commerson",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 240,
      "weight_min_kg": 1,
      "weight_max_kg": 45,
      "strength": 5,
      "endurance": 4.5,
      "agility": 5,
      "alertness": 3.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.68,
      "migration_habit": "migratory",
      "regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "mackerel_tuna",
      "name": "圆舵鲣",
      "species": "Euthynnus affinis",
      "water_type": "saltwater",
      "rarity": "uncommon",
      "size_min_cm": 35,
      "size_max_cm": 100,
      "weight_min_kg": 0.6,
      "weight_max_kg": 15,
      "strength": 4,
      "endurance": 3.9,
      "agility": 4.8,
      "alertness": 3.1,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.35,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "blacktip_trevally",
      "name": "黑鳍鲹",
      "species": "Caranx heberi",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 30,
      "size_max_cm": 130,
      "weight_min_kg": 0.45,
      "weight_max_kg": 18,
      "strength": 4.4,
      "endurance": 4,
      "agility": 4.8,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.46,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "diamond_trevally",
      "name": "钻鲹",
      "species": "Alectis indica",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 35,
      "size_max_cm": 140,
      "weight_min_kg": 0.7,
      "weight_max_kg": 22,
      "strength": 4.5,
      "endurance": 4.1,
      "agility": 4.6,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 1.38,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "topwater"
    },
    {
      "id": "malabar_grouper",
      "name": "驼背鲈",
      "species": "Epinephelus malabaricus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 35,
      "size_max_cm": 200,
      "weight_min_kg": 1,
      "weight_max_kg": 50,
      "strength": 5.1,
      "endurance": 4.8,
      "agility": 2.8,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.22,
      "migration_habit": "resident",
      "regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "potato_grouper",
      "name": "土豆斑",
      "species": "Epinephelus tukula",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 50,
      "size_max_cm": 230,
      "weight_min_kg": 2,
      "weight_max_kg": 70,
      "strength": 5.5,
      "endurance": 5.1,
      "agility": 2.5,
      "alertness": 2.7,
      "bait_preference": "small_fish",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.34,
      "migration_habit": "resident",
      "owned_ship_route_regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "regions": [
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "humphead_wrasse",
      "name": "苏眉鱼",
      "species": "Cheilinus undulatus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 45,
      "size_max_cm": 200,
      "weight_min_kg": 1.5,
      "weight_max_kg": 70,
      "strength": 5.2,
      "endurance": 4.9,
      "agility": 3,
      "alertness": 3,
      "bait_preference": "crab",
      "bite_hours": [
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.18,
      "migration_habit": "resident",
      "owned_ship_route_regions": [
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "regions": [
        "boat_lanchao_shelf"
      ],
      "lure_preference": "crank"
    },
    {
      "id": "great_barracuda",
      "name": "巨梭鱼",
      "species": "Sphyraena barracuda",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 40,
      "size_max_cm": 170,
      "weight_min_kg": 0.7,
      "weight_max_kg": 23,
      "strength": 4.6,
      "endurance": 4,
      "agility": 5.1,
      "alertness": 3.6,
      "bait_preference": "small_fish",
      "bite_hours": [
        6,
        7,
        8,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 1.32,
      "migration_habit": "resident",
      "regions": [
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf",
        "boat_yinlin_offshore"
      ],
      "lure_preference": "minnow"
    },
    {
      "id": "bigeye_scad",
      "name": "大目鲹",
      "species": "Selar crumenophthalmus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 14,
      "size_max_cm": 45,
      "weight_min_kg": 0.04,
      "weight_max_kg": 0.8,
      "strength": 1.7,
      "endurance": 1.8,
      "agility": 4.2,
      "alertness": 2.3,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.02,
      "migration_habit": "migratory",
      "regions": [
        "blackreef_dropoff",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "yellowstripe_scad",
      "name": "黄条鲹",
      "species": "Selaroides leptolepis",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 12,
      "size_max_cm": 30,
      "weight_min_kg": 0.03,
      "weight_max_kg": 0.45,
      "strength": 1.4,
      "endurance": 1.5,
      "agility": 4,
      "alertness": 2.4,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 0.92,
      "migration_habit": "resident",
      "regions": [
        "blackreef_dropoff",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "indian_oil_sardine",
      "name": "油沙丁鱼",
      "species": "Sardinella longiceps",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 10,
      "size_max_cm": 24,
      "weight_min_kg": 0.02,
      "weight_max_kg": 0.18,
      "strength": 1.1,
      "endurance": 1.2,
      "agility": 4.1,
      "alertness": 2,
      "bait_preference": "algae_paste",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 0.88,
      "migration_habit": "migratory",
      "regions": [
        "boat_baijiao_nearshore"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "yellowfin_goatfish",
      "name": "黄鳍羊鱼",
      "species": "Upeneus sulphureus",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 15,
      "size_max_cm": 42,
      "weight_min_kg": 0.05,
      "weight_max_kg": 1.2,
      "strength": 1.8,
      "endurance": 1.9,
      "agility": 2.9,
      "alertness": 2.4,
      "bait_preference": "shrimp",
      "bite_hours": [
        5,
        6,
        17,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 0.78,
      "migration_habit": "resident",
      "regions": [
        "blackreef_dropoff",
        "boat_baijiao_nearshore",
        "boat_lanchao_shelf"
      ],
      "lure_preference": "jig"
    },
    {
      "id": "silver_biddy",
      "name": "银叶鲷",
      "species": "Gerres oyena",
      "water_type": "saltwater",
      "rarity": "common",
      "size_min_cm": 12,
      "size_max_cm": 32,
      "weight_min_kg": 0.03,
      "weight_max_kg": 0.6,
      "strength": 1.5,
      "endurance": 1.6,
      "agility": 3.1,
      "alertness": 2.5,
      "bait_preference": "shrimp",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 0.72,
      "migration_habit": "resident",
      "regions": [
        "boat_baijiao_nearshore"
      ],
      "lure_preference": "spoon"
    },
    {
      "id": "bluefin_tuna_giant",
      "name": "巨型蓝鳍金枪鱼",
      "species": "Thunnus thynnus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 110,
      "size_max_cm": 310,
      "weight_min_kg": 35,
      "weight_max_kg": 320,
      "strength": 5.7,
      "endurance": 5.5,
      "agility": 4.7,
      "alertness": 4,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 2.25,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "southern_bluefin_tuna",
      "name": "南方蓝鳍金枪鱼",
      "species": "Thunnus maccoyii",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 90,
      "size_max_cm": 245,
      "weight_min_kg": 18,
      "weight_max_kg": 180,
      "strength": 5.6,
      "endurance": 5.4,
      "agility": 4.8,
      "alertness": 3.9,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 2.1,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": []
    },
    {
      "id": "bigeye_tuna_giant",
      "name": "巨眼金枪鱼",
      "species": "Thunnus obesus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 70,
      "size_max_cm": 220,
      "weight_min_kg": 12,
      "weight_max_kg": 150,
      "strength": 5.5,
      "endurance": 5.3,
      "agility": 4.6,
      "alertness": 3.7,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        17,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 2.2,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": []
    },
    {
      "id": "black_marlin",
      "name": "黑枪鱼",
      "species": "Istiompax indica",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 160,
      "size_max_cm": 460,
      "weight_min_kg": 80,
      "weight_max_kg": 500,
      "strength": 6,
      "endurance": 5.8,
      "agility": 5,
      "alertness": 4.3,
      "bait_preference": "small_fish",
      "lure_preference": "topwater",
      "bite_hours": [
        6,
        7,
        8,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 2.4,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "blue_marlin",
      "name": "蓝枪鱼",
      "species": "Makaira nigricans",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 140,
      "size_max_cm": 420,
      "weight_min_kg": 60,
      "weight_max_kg": 320,
      "strength": 5.9,
      "endurance": 5.7,
      "agility": 5.1,
      "alertness": 4.1,
      "bait_preference": "small_fish",
      "lure_preference": "topwater",
      "bite_hours": [
        6,
        7,
        15,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 2.35,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "striped_marlin",
      "name": "条纹枪鱼",
      "species": "Kajikia audax",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 110,
      "size_max_cm": 320,
      "weight_min_kg": 18,
      "weight_max_kg": 120,
      "strength": 5.6,
      "endurance": 5.2,
      "agility": 5,
      "alertness": 4,
      "bait_preference": "small_fish",
      "lure_preference": "topwater",
      "bite_hours": [
        6,
        7,
        8,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 2.2,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "swordfish_broadbill",
      "name": "剑鱼",
      "species": "Xiphias gladius",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 130,
      "size_max_cm": 360,
      "weight_min_kg": 35,
      "weight_max_kg": 220,
      "strength": 5.8,
      "endurance": 5.6,
      "agility": 4.4,
      "alertness": 4.1,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        4,
        5,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 2.3,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "atlantic_sailfish",
      "name": "大西洋旗鱼",
      "species": "Istiophorus albicans",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 90,
      "size_max_cm": 290,
      "weight_min_kg": 12,
      "weight_max_kg": 85,
      "strength": 5.5,
      "endurance": 5,
      "agility": 5.2,
      "alertness": 4,
      "bait_preference": "small_fish",
      "lure_preference": "topwater",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 2.15,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "pacific_bluefin_tuna",
      "name": "太平洋蓝鳍金枪鱼",
      "species": "Thunnus orientalis",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 85,
      "size_max_cm": 280,
      "weight_min_kg": 20,
      "weight_max_kg": 260,
      "strength": 5.7,
      "endurance": 5.5,
      "agility": 4.8,
      "alertness": 4,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        8,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 2.3,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "giant_mako_shark",
      "name": "灰鲭鲨",
      "species": "Isurus oxyrinchus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 180,
      "size_max_cm": 390,
      "weight_min_kg": 60,
      "weight_max_kg": 450,
      "strength": 6,
      "endurance": 5.9,
      "agility": 5.3,
      "alertness": 4.2,
      "bait_preference": "small_fish",
      "lure_preference": "minnow",
      "bite_hours": [
        5,
        6,
        7,
        17,
        18
      ],
      "water_layer": "surface",
      "offshore_preference": 2.45,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "silvertip_shark",
      "name": "银尖鲨",
      "species": "Carcharhinus albimarginatus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 110,
      "size_max_cm": 280,
      "weight_min_kg": 25,
      "weight_max_kg": 140,
      "strength": 5.7,
      "endurance": 5.4,
      "agility": 4.9,
      "alertness": 3.8,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 2.2,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "sandbar_shark",
      "name": "沙洲鲨",
      "species": "Carcharhinus plumbeus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 100,
      "size_max_cm": 240,
      "weight_min_kg": 18,
      "weight_max_kg": 95,
      "strength": 5.4,
      "endurance": 5.2,
      "agility": 4.4,
      "alertness": 3.6,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "mid",
      "offshore_preference": 2.05,
      "migration_habit": "migratory",
      "regions": []
    },
    {
      "id": "goliath_grouper",
      "name": "巨型石斑鱼",
      "species": "Epinephelus itajara",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 90,
      "size_max_cm": 250,
      "weight_min_kg": 25,
      "weight_max_kg": 220,
      "strength": 5.8,
      "endurance": 5.7,
      "agility": 2.5,
      "alertness": 3,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19,
        20
      ],
      "water_layer": "deep",
      "offshore_preference": 1.9,
      "migration_habit": "resident",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "warsaw_grouper",
      "name": "华沙石斑鱼",
      "species": "Hyporthodus nigritus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 80,
      "size_max_cm": 220,
      "weight_min_kg": 18,
      "weight_max_kg": 180,
      "strength": 5.7,
      "endurance": 5.6,
      "agility": 2.4,
      "alertness": 2.8,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.95,
      "migration_habit": "resident",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "dog_snapper",
      "name": "犬齿笛鲷",
      "species": "Lutjanus jocu",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 120,
      "weight_min_kg": 6,
      "weight_max_kg": 26,
      "strength": 4.8,
      "endurance": 4.6,
      "agility": 3.2,
      "alertness": 3,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.7,
      "migration_habit": "resident",
      "regions": [
        "stormbreak_headland",
        "boat_crimson_trench"
      ]
    },
    {
      "id": "cubera_snapper",
      "name": "古巴笛鲷",
      "species": "Lutjanus cyanopterus",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 65,
      "size_max_cm": 155,
      "weight_min_kg": 10,
      "weight_max_kg": 55,
      "strength": 5.2,
      "endurance": 5,
      "agility": 3,
      "alertness": 3.1,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.85,
      "migration_habit": "resident",
      "regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ]
    },
    {
      "id": "mutton_snapper",
      "name": "红槽笛鲷",
      "species": "Lutjanus analis",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 38,
      "size_max_cm": 100,
      "weight_min_kg": 5,
      "weight_max_kg": 18,
      "strength": 4.6,
      "endurance": 4.4,
      "agility": 3.4,
      "alertness": 3,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        16,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 1.72,
      "migration_habit": "resident",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "snowy_grouper",
      "name": "雪斑石斑鱼",
      "species": "Hyporthodus niveatus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 110,
      "weight_min_kg": 5,
      "weight_max_kg": 30,
      "strength": 4.9,
      "endurance": 4.8,
      "agility": 2.8,
      "alertness": 2.9,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.92,
      "migration_habit": "resident",
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "yellowedge_grouper",
      "name": "黄边石斑鱼",
      "species": "Hyporthodus flavolimbatus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 40,
      "size_max_cm": 120,
      "weight_min_kg": 5,
      "weight_max_kg": 40,
      "strength": 5,
      "endurance": 4.8,
      "agility": 2.7,
      "alertness": 2.9,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        5,
        6,
        18,
        19
      ],
      "water_layer": "deep",
      "offshore_preference": 1.95,
      "migration_habit": "resident",
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "almaco_jack",
      "name": "阿氏鰤",
      "species": "Seriola rivoliana",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 145,
      "weight_min_kg": 6,
      "weight_max_kg": 45,
      "strength": 5,
      "endurance": 4.8,
      "agility": 4.2,
      "alertness": 3.2,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 2,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "greater_amberjack_giant",
      "name": "巨型琥珀鰤",
      "species": "Seriola dumerili",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 70,
      "size_max_cm": 190,
      "weight_min_kg": 12,
      "weight_max_kg": 85,
      "strength": 5.4,
      "endurance": 5.1,
      "agility": 4,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 2.05,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    },
    {
      "id": "blackfin_tuna",
      "name": "黑鳍金枪鱼",
      "species": "Thunnus atlanticus",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 105,
      "weight_min_kg": 5,
      "weight_max_kg": 22,
      "strength": 4.8,
      "endurance": 4.6,
      "agility": 4.8,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 2,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland",
        "boat_crimson_trench"
      ]
    },
    {
      "id": "rainbow_tuna",
      "name": "彩纹金枪鱼",
      "species": "Euthynnus affinis majoris",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 40,
      "size_max_cm": 95,
      "weight_min_kg": 5,
      "weight_max_kg": 16,
      "strength": 4.5,
      "endurance": 4.2,
      "agility": 4.9,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 1.95,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "pomfret_pacific_giant",
      "name": "巨型鲳鲹",
      "species": "Trachinotus blochii major",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 45,
      "size_max_cm": 125,
      "weight_min_kg": 5,
      "weight_max_kg": 28,
      "strength": 4.7,
      "endurance": 4.4,
      "agility": 4.2,
      "alertness": 3.2,
      "bait_preference": "shrimp",
      "lure_preference": "crank",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "mid",
      "offshore_preference": 1.62,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "giant_blue_runner",
      "name": "巨型蓝鲹",
      "species": "Caranx crysos major",
      "water_type": "saltwater",
      "rarity": "rare",
      "size_min_cm": 42,
      "size_max_cm": 115,
      "weight_min_kg": 5,
      "weight_max_kg": 20,
      "strength": 4.6,
      "endurance": 4.3,
      "agility": 4.6,
      "alertness": 3.1,
      "bait_preference": "small_fish",
      "lure_preference": "topwater",
      "bite_hours": [
        6,
        7,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.78,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "giant_spanish_mackerel",
      "name": "巨型马鲛鱼",
      "species": "Scomberomorus commerson grandis",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 70,
      "size_max_cm": 220,
      "weight_min_kg": 8,
      "weight_max_kg": 55,
      "strength": 5.1,
      "endurance": 4.8,
      "agility": 5,
      "alertness": 3.5,
      "bait_preference": "small_fish",
      "lure_preference": "minnow",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 2,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland",
        "boat_crimson_trench"
      ]
    },
    {
      "id": "king_mackerel_giant",
      "name": "巨型大王马鲛",
      "species": "Scomberomorus cavalla major",
      "water_type": "saltwater",
      "rarity": "epic",
      "size_min_cm": 65,
      "size_max_cm": 180,
      "weight_min_kg": 7,
      "weight_max_kg": 40,
      "strength": 4.9,
      "endurance": 4.6,
      "agility": 5,
      "alertness": 3.4,
      "bait_preference": "small_fish",
      "lure_preference": "minnow",
      "bite_hours": [
        6,
        7,
        8,
        16,
        17
      ],
      "water_layer": "surface",
      "offshore_preference": 1.96,
      "migration_habit": "migratory",
      "regions": [
        "stormbreak_headland"
      ]
    },
    {
      "id": "reef_manta_ray",
      "name": "礁蝠鲼",
      "species": "Mobula alfredi",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 180,
      "size_max_cm": 520,
      "weight_min_kg": 90,
      "weight_max_kg": 480,
      "strength": 5.9,
      "endurance": 5.8,
      "agility": 4,
      "alertness": 3.7,
      "bait_preference": "shellfish",
      "lure_preference": "spoon",
      "bite_hours": [
        7,
        8,
        9,
        15,
        16
      ],
      "water_layer": "mid",
      "offshore_preference": 2.05,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": []
    },
    {
      "id": "reef_mola",
      "name": "翻车鱼",
      "species": "Mola mola",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 120,
      "size_max_cm": 300,
      "weight_min_kg": 80,
      "weight_max_kg": 500,
      "strength": 5.3,
      "endurance": 5.6,
      "agility": 2,
      "alertness": 3.3,
      "bait_preference": "shellfish",
      "lure_preference": "spoon",
      "bite_hours": [
        7,
        8,
        15,
        16
      ],
      "water_layer": "surface",
      "offshore_preference": 2.18,
      "migration_habit": "migratory",
      "regions": [
        "boat_crimson_trench"
      ]
    },
    {
      "id": "greater_cobia",
      "name": "巨型军曹鱼",
      "species": "Rachycentron canadum major",
      "water_type": "saltwater",
      "rarity": "legendary",
      "size_min_cm": 80,
      "size_max_cm": 230,
      "weight_min_kg": 12,
      "weight_max_kg": 90,
      "strength": 5.3,
      "endurance": 5,
      "agility": 4,
      "alertness": 3.3,
      "bait_preference": "small_fish",
      "lure_preference": "jig",
      "bite_hours": [
        6,
        7,
        17,
        18
      ],
      "water_layer": "mid",
      "offshore_preference": 1.95,
      "migration_habit": "migratory",
      "owned_ship_route_regions": [
        "blackreef_dropoff",
        "boat_crimson_trench"
      ],
      "regions": [
        "blackreef_dropoff"
      ]
    }
  ],
  "rods": [
    {
      "id": "bamboo_hand_rod_3m",
      "name": "新手手竿 3m",
      "rod_type": "hand_rod",
      "length": 3,
      "max_tension": 3.2,
      "hardness": 4.2,
      "ergonomics": 5.4,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 160,
      "sell_price": 0,
      "durability": 100
    },
    {
      "id": "carbon_hand_rod_4m5",
      "name": "进阶手竿 4.5m",
      "rod_type": "hand_rod",
      "length": 4.5,
      "max_tension": 4.8,
      "hardness": 6.2,
      "ergonomics": 6.9,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 360,
      "durability": 100
    },
    {
      "id": "fiberglass_bottom_rod_3m6",
      "name": "基础底钓竿 3.6m",
      "rod_type": "bottom_rod",
      "length": 3.6,
      "max_tension": 8.4,
      "hardness": 5.8,
      "ergonomics": 6.2,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 420,
      "durability": 100
    },
    {
      "id": "carbon_bottom_rod_4m5",
      "name": "进阶底钓竿 4.5m",
      "rod_type": "bottom_rod",
      "length": 4.5,
      "max_tension": 12.4,
      "hardness": 6.9,
      "ergonomics": 7.3,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 980,
      "durability": 100
    },
    {
      "id": "spinning_lure_rod_2m1",
      "name": "基础路亚竿 2.1m",
      "rod_type": "lure_rod",
      "length": 2.1,
      "max_tension": 6.2,
      "hardness": 5.6,
      "ergonomics": 8.1,
      "lure_weight_min": 5,
      "lure_weight_max": 20,
      "base_price": 780,
      "durability": 100
    },
    {
      "id": "aqualis_hr540_hand",
      "name": "Aqualis HR-540 · 轻量长节手竿 5.4m",
      "rod_type": "hand_rod",
      "length": 5.4,
      "max_tension": 6.8,
      "hardness": 6.2,
      "ergonomics": 7.6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 1600,
      "durability": 100
    },
    {
      "id": "aqualis_mr390_match",
      "name": "Aqualis MR-390 · 竞技赛竿 3.9m",
      "rod_type": "match_rod",
      "length": 3.9,
      "max_tension": 4.2,
      "hardness": 5.8,
      "ergonomics": 8.4,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 1120,
      "durability": 100
    },
    {
      "id": "riverpeak_lx198ul_lure",
      "name": "RiverPeak LX-198UL · 超轻路亚竿",
      "rod_type": "lure_rod",
      "length": 1.98,
      "max_tension": 4.8,
      "hardness": 5.4,
      "ergonomics": 9.2,
      "lure_weight_min": 2,
      "lure_weight_max": 9,
      "base_price": 1400,
      "durability": 100
    },
    {
      "id": "riverpeak_lure_rod_270m",
      "name": "RiverPeak LX-270M · 中快调路亚竿",
      "rod_type": "lure_rod",
      "length": 2.7,
      "max_tension": 8.8,
      "hardness": 6.8,
      "ergonomics": 8.2,
      "lure_weight_min": 6,
      "lure_weight_max": 22,
      "base_price": 2200,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "tideforge_bottom_rod_480h",
      "name": "TideForge BF-480H · 重型底钓竿",
      "rod_type": "bottom_rod",
      "length": 4.8,
      "max_tension": 13.5,
      "hardness": 8,
      "ergonomics": 5.8,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 3600,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "aqualis_hr570_river_hand",
      "name": "Aqualis HR-570R · 河湾长节手竿 5.7m",
      "rod_type": "hand_rod",
      "length": 5.7,
      "max_tension": 7.6,
      "hardness": 7.1,
      "ergonomics": 8,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 4200,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "aqualis_mr450_pro_match",
      "name": "Aqualis MR-450P · 专业竞技赛竿 4.5m",
      "rod_type": "match_rod",
      "length": 4.5,
      "max_tension": 6.4,
      "hardness": 6.6,
      "ergonomics": 9,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 2808,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "heavy_lure_rod_2m4",
      "name": "RiverPeak LX-250 · 重型路亚竿 2.4m",
      "rod_type": "lure_rod",
      "length": 2.4,
      "max_tension": 15,
      "hardness": 8.5,
      "ergonomics": 7.5,
      "lure_weight_min": 14,
      "lure_weight_max": 60,
      "base_price": 4200,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "aqualis_mr430_club_match",
      "name": "Aqualis MR-430C · 俱乐部赛竿 4.3m",
      "rod_type": "match_rod",
      "length": 4.3,
      "max_tension": 5.4,
      "hardness": 6.3,
      "ergonomics": 9.1,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 1950,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "tideforge_bf450_river_bottom",
      "name": "TideForge BF-450R · 河道底钓竿",
      "rod_type": "bottom_rod",
      "length": 4.5,
      "max_tension": 12.8,
      "hardness": 7.6,
      "ergonomics": 6.3,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 2800,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "riverpeak_lx208lf_finesse",
      "name": "RiverPeak LX-208LF · 轻快路亚竿",
      "rod_type": "lure_rod",
      "length": 2.08,
      "max_tension": 6.8,
      "hardness": 5.9,
      "ergonomics": 9.1,
      "lure_weight_min": 3,
      "lure_weight_max": 12,
      "base_price": 2600,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "tideforge_bf510_channel_bottom",
      "name": "TideForge BF-510C · 河道重底竿",
      "rod_type": "bottom_rod",
      "length": 5.1,
      "max_tension": 15,
      "hardness": 8.2,
      "ergonomics": 6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 7600,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "riverpeak_lx213ml_stream",
      "name": "RiverPeak LX-213ML · 山溪快搜路亚竿",
      "rod_type": "lure_rod",
      "length": 2.13,
      "max_tension": 7.4,
      "hardness": 6.2,
      "ergonomics": 8.9,
      "lure_weight_min": 4,
      "lure_weight_max": 18,
      "base_price": 7600,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "aqualis_hr630_elite_hand",
      "name": "Aqualis HR-630E · 精英长节手竿 6.3m",
      "rod_type": "hand_rod",
      "length": 6.3,
      "max_tension": 8.5,
      "hardness": 6.8,
      "ergonomics": 8.4,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 9800,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "aqualis_mr465_tourney_match",
      "name": "Aqualis MR-465T · 巡回赛竿 4.65m",
      "rod_type": "match_rod",
      "length": 4.65,
      "max_tension": 10.6,
      "hardness": 6.4,
      "ergonomics": 9.1,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 6150,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "aqualis_mr460_speed_match",
      "name": "Aqualis MR-460S · 快反赛竿 4.6m",
      "rod_type": "match_rod",
      "length": 4.6,
      "max_tension": 5.9,
      "hardness": 6.5,
      "ergonomics": 9.25,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 4800,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "tideforge_bf540_bank_bottom",
      "name": "TideForge BF-540B · 岸钓底竿",
      "rod_type": "bottom_rod",
      "length": 5.4,
      "max_tension": 14.2,
      "hardness": 7.8,
      "ergonomics": 6.2,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 6200,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "riverpeak_lx228m_crank",
      "name": "RiverPeak LX-228M · 中层摇滚路亚竿",
      "rod_type": "lure_rod",
      "length": 2.28,
      "max_tension": 8.6,
      "hardness": 6.6,
      "ergonomics": 8.8,
      "lure_weight_min": 6,
      "lure_weight_max": 20,
      "base_price": 6800,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "tideforge_bf600xh_bottom",
      "name": "TideForge BF-600XH · 超硬远投底钓竿",
      "rod_type": "bottom_rod",
      "length": 6,
      "max_tension": 17.5,
      "hardness": 9,
      "ergonomics": 5.6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 22000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "riverpeak_lx234mh_shore",
      "name": "RiverPeak LX-234MH · 岸投路亚竿",
      "rod_type": "lure_rod",
      "length": 2.34,
      "max_tension": 16.6,
      "hardness": 7,
      "ergonomics": 8.6,
      "lure_weight_min": 7,
      "lure_weight_max": 28,
      "base_price": 18000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "aqualis_hr690_reservoir_hand",
      "name": "Aqualis HR-690R · 水库大物手竿 6.9m",
      "rod_type": "hand_rod",
      "length": 6.9,
      "max_tension": 10,
      "hardness": 8.1,
      "ergonomics": 8.5,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 28000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "aqualis_mr495_distance_match",
      "name": "Aqualis MR-495D · 远投竞技赛竿 4.95m",
      "rod_type": "match_rod",
      "length": 4.95,
      "max_tension": 12.8,
      "hardness": 6.9,
      "ergonomics": 9.3,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 14700,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "aqualis_mr480_bank_match",
      "name": "Aqualis MR-480B · 岸线赛竿 4.8m",
      "rod_type": "match_rod",
      "length": 4.8,
      "max_tension": 6.5,
      "hardness": 6.7,
      "ergonomics": 9.35,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 9660,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "tideforge_bf570_reservoir_bottom",
      "name": "TideForge BF-570V · 水库底竿",
      "rod_type": "bottom_rod",
      "length": 5.7,
      "max_tension": 16.2,
      "hardness": 8.5,
      "ergonomics": 6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 12800,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "riverpeak_lx240mh_blade",
      "name": "RiverPeak LX-240MH · 刀片快搜路亚竿",
      "rod_type": "lure_rod",
      "length": 2.4,
      "max_tension": 10.2,
      "hardness": 7.4,
      "ergonomics": 8.7,
      "lure_weight_min": 10,
      "lure_weight_max": 32,
      "base_price": 14500,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "aqualis_mr500_precision_match",
      "name": "Aqualis MR-500P · 精准赛竿 5.0m",
      "rod_type": "match_rod",
      "length": 5,
      "max_tension": 6.9,
      "hardness": 7,
      "ergonomics": 9.45,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 14300,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "aqualis_mr510_current_match",
      "name": "Aqualis MR-510R · 急流赛竿 5.1m",
      "rod_type": "match_rod",
      "length": 5.1,
      "max_tension": 17.3,
      "hardness": 7.2,
      "ergonomics": 9.3,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 16120,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "tideforge_bf600_channel_bottom",
      "name": "TideForge BF-600C · 深槽底竿",
      "rod_type": "bottom_rod",
      "length": 6,
      "max_tension": 17.8,
      "hardness": 8.7,
      "ergonomics": 6.1,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 21500,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "tideforge_bf630_range_bottom",
      "name": "TideForge BF-630D · 远程底竿",
      "rod_type": "bottom_rod",
      "length": 6.3,
      "max_tension": 18.4,
      "hardness": 8.9,
      "ergonomics": 5.8,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 24800,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "riverpeak_lx252ml_bank",
      "name": "RiverPeak LX-252ML · 岸边细作路亚竿",
      "rod_type": "lure_rod",
      "length": 2.52,
      "max_tension": 9.4,
      "hardness": 6.8,
      "ergonomics": 9,
      "lure_weight_min": 5,
      "lure_weight_max": 22,
      "base_price": 23500,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "riverpeak_lx258xh_surf",
      "name": "RiverPeak LX-258XH · 浪口重抛路亚竿",
      "rod_type": "lure_rod",
      "length": 2.58,
      "max_tension": 18.8,
      "hardness": 8.2,
      "ergonomics": 8.4,
      "lure_weight_min": 18,
      "lure_weight_max": 55,
      "base_price": 26800,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "tideforge_bf630_surf_bottom",
      "name": "TideForge BF-630S · 岸抛浪口底钓竿",
      "rod_type": "bottom_rod",
      "length": 6.3,
      "max_tension": 20.4,
      "hardness": 9.3,
      "ergonomics": 5.9,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 56000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "riverpeak_lx228mh_lure",
      "name": "RiverPeak LX-228MH · 中重型远投路亚竿",
      "rod_type": "lure_rod",
      "length": 2.28,
      "max_tension": 14.5,
      "hardness": 7.8,
      "ergonomics": 8.8,
      "lure_weight_min": 8,
      "lure_weight_max": 30,
      "base_price": 52000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "aqualis_mr480_elite_match",
      "name": "Aqualis MR-480E · 旗舰竞技赛竿 4.8m",
      "rod_type": "match_rod",
      "length": 4.8,
      "max_tension": 7.2,
      "hardness": 7,
      "ergonomics": 9.4,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 34800,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "aqualis_hr720_master_hand",
      "name": "Aqualis HR-720M · 大物长尺手竿 7.2m",
      "rod_type": "hand_rod",
      "length": 7.2,
      "max_tension": 11.5,
      "hardness": 7.4,
      "ergonomics": 8.7,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 92000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "aqualis_mr510_royal_match",
      "name": "Aqualis MR-510R · 皇家竞技赛竿 5.1m",
      "rod_type": "match_rod",
      "length": 5.1,
      "max_tension": 16.2,
      "hardness": 7.4,
      "ergonomics": 9.6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 70800,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "tideforge_bf660_oceanlord_bottom",
      "name": "TideForge BF-660OL · 海王远投底钓竿",
      "rod_type": "bottom_rod",
      "length": 6.6,
      "max_tension": 24.6,
      "hardness": 9.4,
      "ergonomics": 6.2,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 132000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "riverpeak_lx246xh_storm_lure",
      "name": "RiverPeak LX-246XH · 风暴远投路亚竿",
      "rod_type": "lure_rod",
      "length": 2.46,
      "max_tension": 17.4,
      "hardness": 8.4,
      "ergonomics": 8.7,
      "lure_weight_min": 18,
      "lure_weight_max": 65,
      "base_price": 118000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "aqualis_mr525_marathon_match",
      "name": "Aqualis MR-525M · 长局赛竿 5.25m",
      "rod_type": "match_rod",
      "length": 5.25,
      "max_tension": 7.8,
      "hardness": 7.3,
      "ergonomics": 9.55,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 21600,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "tideforge_bf660_current_bottom",
      "name": "TideForge BF-660T · 强流底竿",
      "rod_type": "bottom_rod",
      "length": 6.6,
      "max_tension": 20.3,
      "hardness": 9,
      "ergonomics": 6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 38000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "riverpeak_lx264h_breaker",
      "name": "RiverPeak LX-264H · 破浪远投路亚竿",
      "rod_type": "lure_rod",
      "length": 2.64,
      "max_tension": 19.4,
      "hardness": 8.3,
      "ergonomics": 8.6,
      "lure_weight_min": 16,
      "lure_weight_max": 60,
      "base_price": 39500,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "aqualis_mr540_grand_match",
      "name": "Aqualis MR-540G · 高阶竞赛竿 5.4m",
      "rod_type": "match_rod",
      "length": 5.4,
      "max_tension": 18.4,
      "hardness": 7.6,
      "ergonomics": 9.6,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 28710,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "tideforge_bf690_frontier_bottom",
      "name": "TideForge BF-690F · 前沿重底竿",
      "rod_type": "bottom_rod",
      "length": 6.9,
      "max_tension": 21.8,
      "hardness": 9.1,
      "ergonomics": 6.2,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 50000,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "riverpeak_lx270xxh_frontier",
      "name": "RiverPeak LX-270XXH · 边界重炮路亚竿",
      "rod_type": "lure_rod",
      "length": 2.7,
      "max_tension": 20.2,
      "hardness": 8.6,
      "ergonomics": 8.5,
      "lure_weight_min": 24,
      "lure_weight_max": 75,
      "base_price": 49800,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "aqualis_hr810_legend_hand",
      "name": "Aqualis HR-810L · 传承长尺手竿 8.1m",
      "rod_type": "hand_rod",
      "length": 8.1,
      "max_tension": 13,
      "hardness": 7.8,
      "ergonomics": 8.9,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 228000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "aqualis_mr540_imperial_match",
      "name": "Aqualis MR-540I · 帝冠旗舰赛竿 5.4m",
      "rod_type": "match_rod",
      "length": 5.4,
      "max_tension": 21.1,
      "hardness": 8,
      "ergonomics": 9.8,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 135200,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "tideforge_bf720_leviathan_bottom",
      "name": "TideForge BF-720L · 利维坦远洋底钓竿",
      "rod_type": "bottom_rod",
      "length": 7.2,
      "max_tension": 31,
      "hardness": 9.7,
      "ergonomics": 6.4,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 280000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "riverpeak_lx279o_tidebreaker",
      "name": "RiverPeak LX-279O · 破潮旗舰路亚竿",
      "rod_type": "lure_rod",
      "length": 2.79,
      "max_tension": 30.2,
      "hardness": 9.2,
      "ergonomics": 8.9,
      "lure_weight_min": 28,
      "lure_weight_max": 90,
      "base_price": 280000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "aqualis_hr840_prestige_hand",
      "name": "Aqualis HR-840P · 名流长尺手竿 8.4m",
      "rod_type": "hand_rod",
      "length": 8.4,
      "max_tension": 12.2,
      "hardness": 7.7,
      "ergonomics": 8.95,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 168000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "aqualis_mr540_apex_match",
      "name": "Aqualis MR-540A · 巅峰竞技赛竿 5.4m",
      "rod_type": "match_rod",
      "length": 5.4,
      "max_tension": 19.6,
      "hardness": 7.8,
      "ergonomics": 9.7,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 75900,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "tideforge_bf705_deep_current_bottom",
      "name": "TideForge BF-705DC · 深潮重载底钓竿",
      "rod_type": "bottom_rod",
      "length": 7.05,
      "max_tension": 25.4,
      "hardness": 9.4,
      "ergonomics": 6.3,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 162000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "riverpeak_lx276xh_overbreaker",
      "name": "RiverPeak LX-276XH · 越浪远投路亚竿",
      "rod_type": "lure_rod",
      "length": 2.76,
      "max_tension": 24.5,
      "hardness": 8.9,
      "ergonomics": 8.7,
      "lure_weight_min": 30,
      "lure_weight_max": 95,
      "base_price": 158000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "aqualis_hr870_celestial_hand",
      "name": "Aqualis HR-870C · 天游藏锋手竿 8.7m",
      "rod_type": "hand_rod",
      "length": 8.7,
      "max_tension": 14.4,
      "hardness": 8.1,
      "ergonomics": 9.05,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 520000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "aqualis_mr570_celestial_match",
      "name": "Aqualis MR-570C · 天游藏锋赛竿 5.7m",
      "rod_type": "match_rod",
      "length": 5.7,
      "max_tension": 22.8,
      "hardness": 8.2,
      "ergonomics": 9.88,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 210000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "tideforge_bf750_abyssal_bottom",
      "name": "TideForge BF-750A · 深渊远航底钓竿",
      "rod_type": "bottom_rod",
      "length": 7.5,
      "max_tension": 38.8,
      "hardness": 9.85,
      "ergonomics": 6.5,
      "lure_weight_min": 0,
      "lure_weight_max": 0,
      "base_price": 580000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "riverpeak_lx288xxo_bluewater",
      "name": "RiverPeak LX-288XXO · 蓝水巡航路亚竿",
      "rod_type": "lure_rod",
      "length": 2.88,
      "max_tension": 36.8,
      "hardness": 9.4,
      "ergonomics": 8.8,
      "lure_weight_min": 40,
      "lure_weight_max": 130,
      "base_price": 520000,
      "level_required": 50,
      "durability": 100
    }
  ],
  "reels": [
    {
      "id": "spinning_reel_2000",
      "name": "基础纺车轮 2000型",
      "reel_type": "spinning",
      "line_capacity": 150,
      "gear_ratio": 5.2,
      "speed_max": 3.1,
      "friction_max": 3.2,
      "base_price": 200,
      "durability": 100,
      "cast_factor": 1,
      "economy_factor": 1,
      "control_factor": 1
    },
    {
      "id": "spinning_reel_4000",
      "name": "强化纺车轮 4000型",
      "reel_type": "spinning",
      "line_capacity": 200,
      "gear_ratio": 5.5,
      "speed_max": 3.95,
      "friction_max": 5.8,
      "base_price": 520,
      "durability": 100,
      "cast_factor": 1.01,
      "economy_factor": 1,
      "control_factor": 1
    },
    {
      "id": "spoolworks_sw1500m_match",
      "name": "SpoolWorks SW-1500M · 竞技浅杯轮",
      "reel_type": "spinning",
      "line_capacity": 85,
      "gear_ratio": 5.8,
      "speed_max": 3.1,
      "friction_max": 4.8,
      "base_price": 980,
      "durability": 100,
      "cast_factor": 1.03,
      "economy_factor": 1.02,
      "control_factor": 1.01
    },
    {
      "id": "spoolworks_sw3000s",
      "name": "SpoolWorks SW-3000S · 浅线杯纺车轮",
      "reel_type": "spinning",
      "line_capacity": 95,
      "gear_ratio": 5.6,
      "speed_max": 1.5,
      "friction_max": 7.2,
      "base_price": 1300,
      "durability": 100,
      "cast_factor": 1.01,
      "economy_factor": 1.03,
      "control_factor": 1.02
    },
    {
      "id": "baitcasting_reel_low_profile",
      "name": "MarinerEdge ME-3500 · 水滴轮 低剖面",
      "reel_type": "baitcasting",
      "line_capacity": 100,
      "gear_ratio": 7.1,
      "speed_max": 5,
      "friction_max": 8,
      "base_price": 1600,
      "level_required": 7,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.02,
      "control_factor": 1.03
    },
    {
      "id": "spoolworks_sw2500m_match",
      "name": "SpoolWorks SW-2500M · 高速竞技轮",
      "reel_type": "spinning",
      "line_capacity": 120,
      "gear_ratio": 6.2,
      "speed_max": 3.75,
      "friction_max": 6.2,
      "base_price": 2400,
      "level_required": 7,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.03,
      "control_factor": 1.02
    },
    {
      "id": "heavy_spinning_reel_6000",
      "name": "MarinerEdge ME-5000 · 纺车轮 6000型重型",
      "reel_type": "spinning",
      "line_capacity": 300,
      "gear_ratio": 4.8,
      "speed_max": 4.5,
      "friction_max": 12,
      "base_price": 3200,
      "level_required": 7,
      "durability": 100,
      "cast_factor": 1.02,
      "economy_factor": 1.04,
      "control_factor": 1.03
    },
    {
      "id": "marineredge_me6500p",
      "name": "MarinerEdge ME-6500P · 强力远投轮",
      "reel_type": "spinning",
      "line_capacity": 180,
      "gear_ratio": 4.9,
      "speed_max": 1.15,
      "friction_max": 12,
      "base_price": 4800,
      "level_required": 14,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.04,
      "control_factor": 1.03
    },
    {
      "id": "spoolworks_sw4000x",
      "name": "SpoolWorks SW-4000X · 强化纺车轮",
      "reel_type": "spinning",
      "line_capacity": 160,
      "gear_ratio": 6,
      "speed_max": 4.4,
      "friction_max": 8.5,
      "base_price": 5200,
      "level_required": 14,
      "durability": 100,
      "cast_factor": 1.03,
      "economy_factor": 1.02,
      "control_factor": 1.04
    },
    {
      "id": "spoolworks_sw5000v_match",
      "name": "SpoolWorks SW-5000V · 远距竞技轮",
      "reel_type": "spinning",
      "line_capacity": 150,
      "gear_ratio": 6,
      "speed_max": 4.2,
      "friction_max": 7.6,
      "base_price": 7600,
      "level_required": 14,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.04,
      "control_factor": 1.02
    },
    {
      "id": "marineredge_me7000m_bay",
      "name": "MarinerEdge ME-7000M · 港湾强力轮",
      "reel_type": "spinning",
      "line_capacity": 260,
      "gear_ratio": 5.3,
      "speed_max": 4.35,
      "friction_max": 10.8,
      "base_price": 7800,
      "level_required": 14,
      "durability": 100,
      "cast_factor": 1.03,
      "economy_factor": 1.05,
      "control_factor": 1.04
    },
    {
      "id": "marineredge_me8000s_surf",
      "name": "MarinerEdge ME-8000S · 海岸远投轮",
      "reel_type": "spinning",
      "line_capacity": 360,
      "gear_ratio": 4.6,
      "speed_max": 4.25,
      "friction_max": 15,
      "base_price": 14000,
      "level_required": 20,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.04,
      "control_factor": 1.05
    },
    {
      "id": "spoolworks_sw6000hg",
      "name": "SpoolWorks SW-6000HG · 高速大物轮",
      "reel_type": "spinning",
      "line_capacity": 220,
      "gear_ratio": 6.4,
      "speed_max": 5,
      "friction_max": 12,
      "base_price": 17000,
      "level_required": 20,
      "durability": 100,
      "cast_factor": 1.02,
      "economy_factor": 1.03,
      "control_factor": 1.04
    },
    {
      "id": "marineredge_me450dc_bait",
      "name": "MarinerEdge ME-450DC · 数控水滴轮",
      "reel_type": "baitcasting",
      "line_capacity": 140,
      "gear_ratio": 8.1,
      "speed_max": 6,
      "friction_max": 10.5,
      "base_price": 32000,
      "level_required": 20,
      "durability": 100,
      "cast_factor": 1.09,
      "economy_factor": 1.07,
      "control_factor": 1.08
    },
    {
      "id": "marineredge_me850dc_bait",
      "name": "MarinerEdge ME-850DC · 岸投数控水滴轮",
      "reel_type": "baitcasting",
      "line_capacity": 150,
      "gear_ratio": 7.9,
      "speed_max": 5.9,
      "friction_max": 10.2,
      "base_price": 38000,
      "level_required": 32,
      "durability": 100,
      "cast_factor": 1.1,
      "economy_factor": 1.08,
      "control_factor": 1.09
    },
    {
      "id": "marineredge_me9000h_surf",
      "name": "MarinerEdge ME-9000H · 重装岸投轮",
      "reel_type": "spinning",
      "line_capacity": 420,
      "gear_ratio": 5.1,
      "speed_max": 5.5,
      "friction_max": 18,
      "base_price": 56000,
      "level_required": 32,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.05,
      "control_factor": 1.05
    },
    {
      "id": "spoolworks_sw3500t_match",
      "name": "SpoolWorks SW-3500T · 巡回赛竞技轮",
      "reel_type": "spinning",
      "line_capacity": 135,
      "gear_ratio": 6.3,
      "speed_max": 4.05,
      "friction_max": 7,
      "base_price": 62000,
      "level_required": 32,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.02,
      "control_factor": 1.03
    },
    {
      "id": "marineredge_me11000s_offshore",
      "name": "MarinerEdge ME-11000S · 近海大物轮",
      "reel_type": "spinning",
      "line_capacity": 460,
      "gear_ratio": 5,
      "speed_max": 5.7,
      "friction_max": 20,
      "base_price": 112000,
      "level_required": 32,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.04,
      "control_factor": 1.06
    },
    {
      "id": "marineredge_me550dc_bait",
      "name": "MarinerEdge ME-550DC · 顶配数控水滴轮",
      "reel_type": "baitcasting",
      "line_capacity": 160,
      "gear_ratio": 8.4,
      "speed_max": 6.25,
      "friction_max": 12,
      "base_price": 88000,
      "level_required": 32,
      "durability": 100,
      "cast_factor": 1.1,
      "economy_factor": 1.09,
      "control_factor": 1.1
    },
    {
      "id": "abyssalcrown_ac12000",
      "name": "AbyssalCrown AC-12000 · 深海旗舰轮",
      "reel_type": "spinning",
      "line_capacity": 500,
      "gear_ratio": 4.9,
      "speed_max": 6.25,
      "friction_max": 26,
      "base_price": 220000,
      "level_required": 45,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.05,
      "control_factor": 1.06
    },
    {
      "id": "abyssalcrown_ac18000_ocean",
      "name": "AbyssalCrown AC-18000 · 远洋王座轮",
      "reel_type": "spinning",
      "line_capacity": 620,
      "gear_ratio": 4.7,
      "speed_max": 6.5,
      "friction_max": 30,
      "base_price": 280000,
      "level_required": 45,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.04,
      "control_factor": 1.06
    },
    {
      "id": "harborforge_drum_6000",
      "name": "HarborForge DR-6000 · 鼓形鱼轮 6000型",
      "reel_type": "drum",
      "line_capacity": 420,
      "gear_ratio": 3.8,
      "speed_max": 2.4,
      "friction_max": 16,
      "base_price": 12000,
      "level_required": 14,
      "durability": 100,
      "cast_factor": 1.02,
      "economy_factor": 1.05,
      "control_factor": 1.04
    },
    {
      "id": "harborforge_drum_9000",
      "name": "HarborForge DR-9000 · 鼓形鱼轮 9000型",
      "reel_type": "drum",
      "line_capacity": 560,
      "gear_ratio": 3.5,
      "speed_max": 2.1,
      "friction_max": 22,
      "base_price": 38000,
      "level_required": 27,
      "durability": 100,
      "cast_factor": 1.03,
      "economy_factor": 1.05,
      "control_factor": 1.05
    },
    {
      "id": "abyssalcrown_drum_12000",
      "name": "AbyssalCrown DR-12000 · 深海鼓形旗舰轮",
      "reel_type": "drum",
      "line_capacity": 720,
      "gear_ratio": 3.2,
      "speed_max": 1.9,
      "friction_max": 30,
      "base_price": 98000,
      "level_required": 35,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.05,
      "control_factor": 1.07
    },
    {
      "id": "spoolworks_sw3800c_prestige",
      "name": "SpoolWorks SW-3800C · 名流竞技轮",
      "reel_type": "spinning",
      "line_capacity": 150,
      "gear_ratio": 6.5,
      "speed_max": 4.25,
      "friction_max": 7.8,
      "base_price": 128000,
      "level_required": 40,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.03,
      "control_factor": 1.04
    },
    {
      "id": "marineredge_me650dc_storm",
      "name": "MarinerEdge ME-650DC · 风暴数控水滴轮",
      "reel_type": "baitcasting",
      "line_capacity": 170,
      "gear_ratio": 8.6,
      "speed_max": 6.4,
      "friction_max": 13.8,
      "base_price": 148000,
      "level_required": 40,
      "durability": 100,
      "cast_factor": 1.11,
      "economy_factor": 1.09,
      "control_factor": 1.11
    },
    {
      "id": "harborforge_drum_10500",
      "name": "HarborForge DR-10500 · 深潮鼓形轮",
      "reel_type": "drum",
      "line_capacity": 660,
      "gear_ratio": 3.3,
      "speed_max": 1.95,
      "friction_max": 28,
      "base_price": 168000,
      "level_required": 40,
      "durability": 100,
      "cast_factor": 1.04,
      "economy_factor": 1.06,
      "control_factor": 1.07
    },
    {
      "id": "marineredge_me14000b_bluecurrent",
      "name": "MarinerEdge ME-14000B · 蓝潮大物轮",
      "reel_type": "spinning",
      "line_capacity": 540,
      "gear_ratio": 4.9,
      "speed_max": 6.1,
      "friction_max": 24,
      "base_price": 172000,
      "level_required": 40,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.05,
      "control_factor": 1.06
    },
    {
      "id": "spoolworks_sw4200i_imperial",
      "name": "SpoolWorks SW-4200I · 帝冠藏锋竞技轮",
      "reel_type": "spinning",
      "line_capacity": 165,
      "gear_ratio": 6.7,
      "speed_max": 4.4,
      "friction_max": 8.8,
      "base_price": 360000,
      "level_required": 50,
      "durability": 100,
      "cast_factor": 1.06,
      "economy_factor": 1.04,
      "control_factor": 1.05
    },
    {
      "id": "marineredge_me780dc_horizon",
      "name": "MarinerEdge ME-780DC · 天际重炮水滴轮",
      "reel_type": "baitcasting",
      "line_capacity": 190,
      "gear_ratio": 8.8,
      "speed_max": 6.6,
      "friction_max": 15.2,
      "base_price": 380000,
      "level_required": 50,
      "durability": 100,
      "cast_factor": 1.12,
      "economy_factor": 1.1,
      "control_factor": 1.12
    },
    {
      "id": "abyssalcrown_drum_16000",
      "name": "AbyssalCrown DR-16000 · 深渊鼓形王座轮",
      "reel_type": "drum",
      "line_capacity": 920,
      "gear_ratio": 3,
      "speed_max": 1.75,
      "friction_max": 38,
      "base_price": 620000,
      "level_required": 50,
      "durability": 100,
      "cast_factor": 1.05,
      "economy_factor": 1.06,
      "control_factor": 1.08
    },
    {
      "id": "abyssalcrown_ac22000_trench",
      "name": "AbyssalCrown AC-22000 · 海沟王座轮",
      "reel_type": "spinning",
      "line_capacity": 760,
      "gear_ratio": 4.5,
      "speed_max": 6.7,
      "friction_max": 36,
      "base_price": 760000,
      "level_required": 50,
      "durability": 100,
      "cast_factor": 1.06,
      "economy_factor": 1.05,
      "control_factor": 1.07
    }
  ],
  "lines": [
    {
      "id": "nylon_line_2lb",
      "name": "基础尼龙线 2号",
      "material": "nylon",
      "diameter_mm": 0.23,
      "length_m": 100,
      "max_tension": 2.8,
      "visibility": 0.34,
      "base_price": 70,
      "sell_price": 0,
      "durability": 100
    },
    {
      "id": "nylon_line_4lb",
      "name": "基础尼龙线 4号",
      "material": "nylon",
      "diameter_mm": 0.33,
      "length_m": 100,
      "max_tension": 4.8,
      "visibility": 0.36,
      "base_price": 140,
      "durability": 100
    },
    {
      "id": "fluoro_leader_3lb",
      "name": "FluoroMax FL-3 · 碳素子线 3号",
      "material": "fluorocarbon",
      "diameter_mm": 0.28,
      "length_m": 30,
      "max_tension": 3.5,
      "visibility": 0.15,
      "base_price": 260,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_6lb",
      "name": "泛用尼龙主线 6lb",
      "material": "nylon",
      "diameter_mm": 0.22,
      "length_m": 70,
      "max_tension": 3,
      "visibility": 0.34,
      "base_price": 240,
      "durability": 100
    },
    {
      "id": "steel_leader_30lb",
      "name": "SteelGuard SG-30 · 钢丝子线 30磅",
      "material": "steel",
      "diameter_mm": 0.4,
      "length_m": 10,
      "max_tension": 15,
      "visibility": 0.85,
      "base_price": 620,
      "durability": 100
    },
    {
      "id": "clearcast_match_3lb",
      "name": "基础竞技主线 3lb",
      "material": "nylon",
      "diameter_mm": 0.18,
      "length_m": 80,
      "max_tension": 3.2,
      "visibility": 0.28,
      "base_price": 200,
      "durability": 100
    },
    {
      "id": "braidcore_pe_10lb",
      "name": "BraidCore PE-10 · 10lb PE 主线",
      "material": "pe",
      "diameter_mm": 0.18,
      "length_m": 90,
      "max_tension": 5.2,
      "visibility": 0.55,
      "base_price": 720,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_8lb",
      "name": "ClearCast NC-8 · 8lb 尼龙主线",
      "material": "nylon",
      "diameter_mm": 0.26,
      "length_m": 120,
      "max_tension": 7,
      "visibility": 0.37,
      "base_price": 520,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "pe_braid_20lb",
      "name": "FluoroMax FL-8 · PE编织线 20磅",
      "material": "pe",
      "diameter_mm": 0.2,
      "length_m": 150,
      "max_tension": 10,
      "visibility": 0.55,
      "base_price": 1100,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "clearcast_match_5lb",
      "name": "ClearCast MC-5 · 强化竞技尼龙主线 5lb",
      "material": "nylon",
      "diameter_mm": 0.24,
      "length_m": 100,
      "max_tension": 5.4,
      "visibility": 0.32,
      "base_price": 340,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_7lb_long",
      "name": "ClearCast NC-7L · 长线尼龙主线 7lb",
      "material": "nylon",
      "diameter_mm": 0.24,
      "length_m": 140,
      "max_tension": 6.4,
      "visibility": 0.35,
      "base_price": 440,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "clearcast_match_4lb_plus",
      "name": "ClearCast MC-4S · 细竞技主线 4lb",
      "material": "nylon",
      "diameter_mm": 0.2,
      "length_m": 110,
      "max_tension": 4.5,
      "visibility": 0.27,
      "base_price": 300,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "fluorocore_fc8_main",
      "name": "FluoroCore FC-8 · 8lb 碳氟主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.24,
      "length_m": 120,
      "max_tension": 7.2,
      "visibility": 0.16,
      "base_price": 780,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "braidcore_pe_12lb",
      "name": "BraidCore PE-12 · 12lb 细编主线",
      "material": "pe",
      "diameter_mm": 0.16,
      "length_m": 130,
      "max_tension": 6,
      "visibility": 0.47,
      "base_price": 860,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "braidcore_pe_16lb_cast",
      "name": "BraidCore PE-16 · 16lb 抛投主线",
      "material": "pe",
      "diameter_mm": 0.18,
      "length_m": 145,
      "max_tension": 7.8,
      "visibility": 0.5,
      "base_price": 980,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_12lb",
      "name": "ClearCast NC-12 · 12lb 强韧尼龙主线",
      "material": "nylon",
      "diameter_mm": 0.34,
      "length_m": 160,
      "max_tension": 11,
      "visibility": 0.39,
      "base_price": 1700,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "braidcore_pe_25lb",
      "name": "BraidCore PE-25 · 25lb 八编主线",
      "material": "pe",
      "diameter_mm": 0.24,
      "length_m": 180,
      "max_tension": 13.5,
      "visibility": 0.48,
      "base_price": 1800,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluorocore_fc12_main",
      "name": "FluoroCore FC-12 · 12lb 碳氟主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.31,
      "length_m": 150,
      "max_tension": 10.5,
      "visibility": 0.18,
      "base_price": 3200,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_10lb_bank",
      "name": "ClearCast NC-10B · 岸钓尼龙主线 10lb",
      "material": "nylon",
      "diameter_mm": 0.3,
      "length_m": 150,
      "max_tension": 8.8,
      "visibility": 0.36,
      "base_price": 1200,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "clearcast_match_6lb_taper",
      "name": "ClearCast MC-6T · 远投竞技主线 6lb",
      "material": "nylon",
      "diameter_mm": 0.22,
      "length_m": 130,
      "max_tension": 6.2,
      "visibility": 0.26,
      "base_price": 760,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluorocore_fc10_main",
      "name": "FluoroCore FC-10 · 10lb 低显主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.28,
      "length_m": 140,
      "max_tension": 8.8,
      "visibility": 0.15,
      "base_price": 2100,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluorocore_fc14_cast",
      "name": "FluoroCore FC-14 · 14lb 抛投主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.33,
      "length_m": 165,
      "max_tension": 11.8,
      "visibility": 0.19,
      "base_price": 3600,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "braidcore_pe_18lb_finesse",
      "name": "BraidCore PE-18 · 18lb 精细主线",
      "material": "pe",
      "diameter_mm": 0.2,
      "length_m": 170,
      "max_tension": 11.2,
      "visibility": 0.46,
      "base_price": 1600,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluorocore_fc20_main",
      "name": "FluoroCore FC-20 · 20lb 低显主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.36,
      "length_m": 180,
      "max_tension": 15,
      "visibility": 0.2,
      "base_price": 7800,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_pe_40lb",
      "name": "BraidCore PE-40 · 40lb 远投主线",
      "material": "pe",
      "diameter_mm": 0.29,
      "length_m": 220,
      "max_tension": 18,
      "visibility": 0.6,
      "base_price": 12000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_pe_55lb",
      "name": "BraidCore PE-55 · 55lb 岸投主线",
      "material": "pe",
      "diameter_mm": 0.42,
      "length_m": 240,
      "max_tension": 26,
      "visibility": 0.61,
      "base_price": 26000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_14lb_surf",
      "name": "ClearCast NC-14S · 浪口尼龙主线 14lb",
      "material": "nylon",
      "diameter_mm": 0.36,
      "length_m": 180,
      "max_tension": 12.8,
      "visibility": 0.38,
      "base_price": 2800,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "clearcast_match_8lb_power",
      "name": "ClearCast MC-8P · 强化竞技主线 8lb",
      "material": "nylon",
      "diameter_mm": 0.26,
      "length_m": 150,
      "max_tension": 7.8,
      "visibility": 0.28,
      "base_price": 1500,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "fluorocore_fc16_main",
      "name": "FluoroCore FC-16 · 16lb 碳氟主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.34,
      "length_m": 170,
      "max_tension": 13.2,
      "visibility": 0.18,
      "base_price": 4900,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_pe_30lb",
      "name": "BraidCore PE-30 · 30lb 八编主线",
      "material": "pe",
      "diameter_mm": 0.24,
      "length_m": 210,
      "max_tension": 15.2,
      "visibility": 0.5,
      "base_price": 4200,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_pe_35lb_long",
      "name": "BraidCore PE-35 · 35lb 长抛主线",
      "material": "pe",
      "diameter_mm": 0.27,
      "length_m": 240,
      "max_tension": 16.8,
      "visibility": 0.53,
      "base_price": 7800,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_16lb_reservoir",
      "name": "ClearCast NC-16R · 水库尼龙主线 16lb",
      "material": "nylon",
      "diameter_mm": 0.4,
      "length_m": 210,
      "max_tension": 14.8,
      "visibility": 0.39,
      "base_price": 5200,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "clearcast_match_10lb_distance",
      "name": "ClearCast MC-10D · 远距竞技主线 10lb",
      "material": "nylon",
      "diameter_mm": 0.28,
      "length_m": 170,
      "max_tension": 8.8,
      "visibility": 0.29,
      "base_price": 2800,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "fluorocore_fc18_main",
      "name": "FluoroCore FC-18 · 18lb 低显主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.35,
      "length_m": 190,
      "max_tension": 14,
      "visibility": 0.17,
      "base_price": 6200,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "braidcore_pe_32lb_pitch",
      "name": "BraidCore PE-32 · 32lb 轻冲主线",
      "material": "pe",
      "diameter_mm": 0.25,
      "length_m": 220,
      "max_tension": 15.8,
      "visibility": 0.47,
      "base_price": 5800,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "braidcore_pe_45lb_stride",
      "name": "BraidCore PE-45 · 45lb 强抛主线",
      "material": "pe",
      "diameter_mm": 0.31,
      "length_m": 250,
      "max_tension": 20.5,
      "visibility": 0.56,
      "base_price": 11000,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "braidcore_pe_80lb",
      "name": "BraidCore PE-80 · 80lb 深海主线",
      "material": "pe",
      "diameter_mm": 0.42,
      "length_m": 300,
      "max_tension": 36,
      "visibility": 0.65,
      "base_price": 52000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "braidcore_pe_90lb",
      "name": "BraidCore PE-90 · 90lb 蓝水主线",
      "material": "pe",
      "diameter_mm": 0.55,
      "length_m": 320,
      "max_tension": 42,
      "visibility": 0.66,
      "base_price": 78000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_18lb_haul",
      "name": "ClearCast NC-18H · 重载尼龙主线 18lb",
      "material": "nylon",
      "diameter_mm": 0.43,
      "length_m": 230,
      "max_tension": 16.4,
      "visibility": 0.4,
      "base_price": 7600,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "clearcast_match_12lb_tournament",
      "name": "ClearCast MC-12T · 巡回赛主线 12lb",
      "material": "nylon",
      "diameter_mm": 0.31,
      "length_m": 185,
      "max_tension": 10.4,
      "visibility": 0.3,
      "base_price": 4600,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "fluorocore_fc22_main",
      "name": "FluoroCore FC-22 · 22lb 抗磨主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.38,
      "length_m": 210,
      "max_tension": 16.5,
      "visibility": 0.18,
      "base_price": 9800,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "braidcore_pe_50lb_shore",
      "name": "BraidCore PE-50 · 50lb 岸投主线",
      "material": "pe",
      "diameter_mm": 0.33,
      "length_m": 260,
      "max_tension": 22.5,
      "visibility": 0.57,
      "base_price": 15000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "braidcore_pe_60lb_tide",
      "name": "BraidCore PE-60 · 60lb 潮线主线",
      "material": "pe",
      "diameter_mm": 0.36,
      "length_m": 280,
      "max_tension": 27,
      "visibility": 0.59,
      "base_price": 22000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "clearcast_nylon_20lb_breakwater",
      "name": "ClearCast NC-20B · 防波堤尼龙主线 20lb",
      "material": "nylon",
      "diameter_mm": 0.46,
      "length_m": 240,
      "max_tension": 17.5,
      "visibility": 0.41,
      "base_price": 9800,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "clearcast_match_14lb_grand",
      "name": "ClearCast MC-14G · 高阶竞技主线 14lb",
      "material": "nylon",
      "diameter_mm": 0.34,
      "length_m": 200,
      "max_tension": 11.8,
      "visibility": 0.31,
      "base_price": 6200,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "fluorocore_fc26_main",
      "name": "FluoroCore FC-26 · 26lb 远抛主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.41,
      "length_m": 220,
      "max_tension": 18.8,
      "visibility": 0.19,
      "base_price": 13200,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "fluorocore_fc30_main",
      "name": "FluoroCore FC-30 · 30lb 大物主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.44,
      "length_m": 240,
      "max_tension": 21.5,
      "visibility": 0.2,
      "base_price": 16800,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "braidcore_pe_70lb_ridge",
      "name": "BraidCore PE-70 · 70lb 峰线主线",
      "material": "pe",
      "diameter_mm": 0.39,
      "length_m": 300,
      "max_tension": 31.5,
      "visibility": 0.61,
      "base_price": 32000,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "braidcore_pe_120lb",
      "name": "BraidCore PE-120 · 百二深海主线",
      "material": "pe",
      "diameter_mm": 0.52,
      "length_m": 360,
      "max_tension": 54,
      "visibility": 0.68,
      "base_price": 120000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "clearcast_match_16lb_elite",
      "name": "ClearCast MC-16E · 名流竞技主线 16lb",
      "material": "nylon",
      "diameter_mm": 0.36,
      "length_m": 220,
      "max_tension": 13.2,
      "visibility": 0.32,
      "base_price": 9800,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "fluorocore_fc36_main",
      "name": "FluoroCore FC-36 · 深磨大物主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.48,
      "length_m": 260,
      "max_tension": 26,
      "visibility": 0.19,
      "base_price": 28000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "braidcore_pe_85lb_horizon",
      "name": "BraidCore PE-85 · 85lb 天际主线",
      "material": "pe",
      "diameter_mm": 0.45,
      "length_m": 320,
      "max_tension": 38.5,
      "visibility": 0.63,
      "base_price": 56000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "clearcast_match_18lb_imperial",
      "name": "ClearCast MC-18I · 帝冠竞技主线 18lb",
      "material": "nylon",
      "diameter_mm": 0.39,
      "length_m": 240,
      "max_tension": 15.1,
      "visibility": 0.32,
      "base_price": 36000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "fluorocore_fc45_bluewater",
      "name": "FluoroCore FC-45 · 蓝水旗舰主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.56,
      "length_m": 300,
      "max_tension": 32.5,
      "visibility": 0.21,
      "base_price": 72000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_pe_150lb_trench",
      "name": "BraidCore PE-150 · 海沟主线",
      "material": "pe",
      "diameter_mm": 0.58,
      "length_m": 420,
      "max_tension": 68,
      "visibility": 0.69,
      "base_price": 180000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_pe_180lb_leviathan",
      "name": "BraidCore PE-180 · 利维坦主线",
      "material": "pe",
      "diameter_mm": 0.66,
      "length_m": 450,
      "max_tension": 82,
      "visibility": 0.71,
      "base_price": 260000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "fluorocore_fc52_longrange",
      "name": "FluoroCore FC-52 · 远航长储主线",
      "material": "fluorocarbon",
      "diameter_mm": 0.6,
      "length_m": 480,
      "max_tension": 37.5,
      "visibility": 0.22,
      "base_price": 98000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "clearcast_match_20lb_marathon",
      "name": "ClearCast MC-20M · 长局竞技主线 20lb",
      "material": "nylon",
      "diameter_mm": 0.42,
      "length_m": 320,
      "max_tension": 16.8,
      "visibility": 0.33,
      "base_price": 52000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_pe_220lb_horizon",
      "name": "BraidCore PE-220 · 天际深海主线",
      "material": "pe",
      "diameter_mm": 0.72,
      "length_m": 520,
      "max_tension": 96,
      "visibility": 0.72,
      "base_price": 320000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_pe_260lb_bluecurrent",
      "name": "BraidCore PE-260 · 蓝潮远征主线",
      "material": "pe",
      "diameter_mm": 0.78,
      "length_m": 600,
      "max_tension": 112,
      "visibility": 0.73,
      "base_price": 420000,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_pe_300lb_abyss",
      "name": "BraidCore PE-300 · 深渊王座主线",
      "material": "pe",
      "diameter_mm": 0.84,
      "length_m": 700,
      "max_tension": 130,
      "visibility": 0.74,
      "base_price": 560000,
      "level_required": 50,
      "durability": 100
    }
  ],
  "hooks": [
    {
      "id": "single_hook_sz4",
      "name": "基础单钩 18号",
      "hook_type": "single",
      "size": 18,
      "max_tension": 30,
      "snag_factor": 0.2,
      "recognition": 0.15,
      "base_price": 26,
      "sell_price": 0,
      "durability": 100
    },
    {
      "id": "single_hook_sz8",
      "name": "强化单钩 16号",
      "hook_type": "single",
      "size": 16,
      "max_tension": 60,
      "snag_factor": 0.25,
      "recognition": 0.2,
      "base_price": 34,
      "durability": 100
    },
    {
      "id": "double_hook_sz6",
      "name": "双钩 14号",
      "hook_type": "double",
      "size": 14,
      "max_tension": 50,
      "snag_factor": 0.45,
      "recognition": 0.3,
      "base_price": 44,
      "durability": 100
    },
    {
      "id": "hooklab_single_sz6",
      "name": "细条单钩 20号",
      "hook_type": "single",
      "size": 20,
      "max_tension": 24,
      "snag_factor": 0.16,
      "recognition": 0.18,
      "base_price": 20,
      "durability": 100
    },
    {
      "id": "treble_hook_sz2",
      "name": "基础三本钩 12号",
      "hook_type": "treble",
      "size": 12,
      "max_tension": 25,
      "snag_factor": 0.65,
      "recognition": 0.45,
      "base_price": 50,
      "durability": 100
    },
    {
      "id": "single_hook_match_sz3",
      "name": "NeedlePoint NP-M3 · 竞技袖钩 19号",
      "hook_type": "single",
      "size": 19,
      "max_tension": 34,
      "snag_factor": 0.08,
      "recognition": 0.18,
      "base_price": 22,
      "durability": 100
    },
    {
      "id": "starter_single_hook_sz17",
      "name": "基础单钩 17号",
      "hook_type": "single",
      "size": 17,
      "max_tension": 34,
      "snag_factor": 0.2,
      "recognition": 0.16,
      "base_price": 30,
      "durability": 100
    },
    {
      "id": "match_single_hook_sz15",
      "name": "竞技袖钩 15号",
      "hook_type": "single",
      "size": 15,
      "max_tension": 46,
      "snag_factor": 0.1,
      "recognition": 0.18,
      "base_price": 38,
      "durability": 100
    },
    {
      "id": "hooklab_single_sz13",
      "name": "细条单钩 13号",
      "hook_type": "single",
      "size": 13,
      "max_tension": 58,
      "snag_factor": 0.14,
      "recognition": 0.2,
      "base_price": 48,
      "durability": 100
    },
    {
      "id": "treble_hook_sz4",
      "name": "强化三本钩 10号",
      "hook_type": "treble",
      "size": 10,
      "max_tension": 40,
      "snag_factor": 0.7,
      "recognition": 0.4,
      "base_price": 190,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "needlepoint_np_m7",
      "name": "NeedlePoint NP-M7 · 大物竞技袖钩 11号",
      "hook_type": "single",
      "size": 11,
      "max_tension": 70,
      "snag_factor": 0.12,
      "recognition": 0.24,
      "base_price": 180,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "trigrip_treble_sz10",
      "name": "TriGrip TR-10 · 三本钩 8号",
      "hook_type": "treble",
      "size": 8,
      "max_tension": 75,
      "snag_factor": 0.64,
      "recognition": 0.52,
      "base_price": 220,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "single_hook_match_sz5",
      "name": "NeedlePoint NP-M5 · 强化竞技袖钩 9号",
      "hook_type": "single",
      "size": 9,
      "max_tension": 52,
      "snag_factor": 0.1,
      "recognition": 0.22,
      "base_price": 200,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "needlepoint_np_m9",
      "name": "NeedlePoint NP-M9 · 强韧竞技袖钩 10号",
      "hook_type": "single",
      "size": 10,
      "max_tension": 64,
      "snag_factor": 0.11,
      "recognition": 0.23,
      "base_price": 190,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "trigrip_double_sz11",
      "name": "TriGrip DH-11 · 双钩 11号",
      "hook_type": "double",
      "size": 11,
      "max_tension": 58,
      "snag_factor": 0.38,
      "recognition": 0.28,
      "base_price": 170,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "widegap_hook_sz7",
      "name": "NeedlePoint WG-7 · 宽腹单钩 7号",
      "hook_type": "single",
      "size": 7,
      "max_tension": 85,
      "snag_factor": 0.16,
      "recognition": 0.34,
      "base_price": 230,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "hooklab_circle_sz4",
      "name": "HookLab CH-04 · 稳挂圆弯钩 6号",
      "hook_type": "single",
      "size": 6,
      "max_tension": 85,
      "snag_factor": 0.14,
      "recognition": 0.24,
      "base_price": 240,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "hooklab_circle_sz2",
      "name": "HookLab CH-02 · 圆弯单钩 5号",
      "hook_type": "single",
      "size": 5,
      "max_tension": 95,
      "snag_factor": 0.18,
      "recognition": 0.28,
      "base_price": 260,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "hooklab_circle_sz8",
      "name": "HookLab CH-08 · 稳挂圆弯钩 8号",
      "hook_type": "single",
      "size": 8,
      "max_tension": 72,
      "snag_factor": 0.13,
      "recognition": 0.22,
      "base_price": 230,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "trigrip_double_sz7",
      "name": "TriGrip DH-07 · 双钩 7号",
      "hook_type": "double",
      "size": 7,
      "max_tension": 88,
      "snag_factor": 0.42,
      "recognition": 0.33,
      "base_price": 250,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "needlepoint_wg9_swamp",
      "name": "NeedlePoint WG-9 · 沼泽宽腹钩 4号",
      "hook_type": "single",
      "size": 4,
      "max_tension": 110,
      "snag_factor": 0.18,
      "recognition": 0.36,
      "base_price": 320,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "trigrip_double_sz4",
      "name": "TriGrip DH-04 · 强拉双钩 4号",
      "hook_type": "double",
      "size": 4,
      "max_tension": 118,
      "snag_factor": 0.44,
      "recognition": 0.35,
      "base_price": 320,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "trigrip_tr14_x",
      "name": "TriGrip TR-14X · 海钓三本钩 3号",
      "hook_type": "treble",
      "size": 3,
      "max_tension": 120,
      "snag_factor": 0.7,
      "recognition": 0.55,
      "base_price": 340,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "needlepoint_wg5_swamp",
      "name": "NeedlePoint WG-5 · 湿地宽腹钩 5号",
      "hook_type": "single",
      "size": 5,
      "max_tension": 108,
      "snag_factor": 0.17,
      "recognition": 0.32,
      "base_price": 320,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "trigrip_treble_sz6",
      "name": "TriGrip TR-06 · 强刺三本钩 6号",
      "hook_type": "treble",
      "size": 6,
      "max_tension": 112,
      "snag_factor": 0.68,
      "recognition": 0.49,
      "base_price": 330,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "hooklab_circle_sz3",
      "name": "HookLab CH-03 · 强拉圆弯钩 3号",
      "hook_type": "single",
      "size": 3,
      "max_tension": 128,
      "snag_factor": 0.17,
      "recognition": 0.29,
      "base_price": 360,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "trigrip_double_sz2",
      "name": "TriGrip DH-02 · 近海双钩 2号",
      "hook_type": "double",
      "size": 2,
      "max_tension": 138,
      "snag_factor": 0.46,
      "recognition": 0.36,
      "base_price": 360,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_sz1",
      "name": "TriGrip ST-01 · 近海爆击三本钩 2号",
      "hook_type": "treble",
      "size": 2,
      "max_tension": 150,
      "snag_factor": 0.72,
      "recognition": 0.58,
      "base_price": 390,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "marineredge_bg11_biggame",
      "name": "MarinerEdge BG-11 · 远洋大物钩 1号",
      "hook_type": "single",
      "size": 1,
      "max_tension": 180,
      "snag_factor": 0.2,
      "recognition": 0.38,
      "base_price": 410,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "marineredge_bg07_reef",
      "name": "MarinerEdge BG-07 · 礁区大物钩 2号",
      "hook_type": "single",
      "size": 2,
      "max_tension": 160,
      "snag_factor": 0.19,
      "recognition": 0.37,
      "base_price": 400,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_sz0",
      "name": "TriGrip ST-00 · 海潮爆击三本钩 0号",
      "hook_type": "treble",
      "size": 0,
      "max_tension": 190,
      "snag_factor": 0.74,
      "recognition": 0.61,
      "base_price": 460,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_double_sz0",
      "name": "TriGrip DH-00 · 海潮双钩 0号",
      "hook_type": "double",
      "size": 0,
      "max_tension": 210,
      "snag_factor": 0.48,
      "recognition": 0.38,
      "base_price": 455,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "marineredge_bg15_titan",
      "name": "MarinerEdge BG-15 · 泰坦远洋大物钩 0号",
      "hook_type": "single",
      "size": 0,
      "max_tension": 240,
      "snag_factor": 0.22,
      "recognition": 0.4,
      "base_price": 480,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "marineredge_bg13_tuna_1_0",
      "name": "MarinerEdge BG-13 · 近海金枪钩 1/0",
      "hook_type": "single",
      "size": -1,
      "max_tension": 260,
      "snag_factor": 0.23,
      "recognition": 0.42,
      "base_price": 520,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "marineredge_bg17_amberjack_2_0",
      "name": "MarinerEdge BG-17 · 琥珀鱼钩 2/0",
      "hook_type": "single",
      "size": -2,
      "max_tension": 285,
      "snag_factor": 0.24,
      "recognition": 0.44,
      "base_price": 560,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_1_0",
      "name": "TriGrip ST-10 · 近海三本钩 1/0",
      "hook_type": "treble",
      "size": -1,
      "max_tension": 205,
      "snag_factor": 0.75,
      "recognition": 0.62,
      "base_price": 500,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_double_2_0",
      "name": "TriGrip DH-20 · 近海双钩 2/0",
      "hook_type": "double",
      "size": -2,
      "max_tension": 245,
      "snag_factor": 0.49,
      "recognition": 0.39,
      "base_price": 520,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_2_0",
      "name": "TriGrip ST-20 · 近海三本钩 2/0",
      "hook_type": "treble",
      "size": -2,
      "max_tension": 220,
      "snag_factor": 0.755,
      "recognition": 0.63,
      "base_price": 520,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_3_0",
      "name": "TriGrip ST-30 · 爆击三本钩 3/0",
      "hook_type": "treble",
      "size": -3,
      "max_tension": 235,
      "snag_factor": 0.76,
      "recognition": 0.64,
      "base_price": 540,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_double_4_0",
      "name": "TriGrip DH-40 · 海湾双钩 4/0",
      "hook_type": "double",
      "size": -4,
      "max_tension": 275,
      "snag_factor": 0.49,
      "recognition": 0.39,
      "base_price": 500,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_4_0",
      "name": "TriGrip ST-40 · 海湾三本钩 4/0",
      "hook_type": "treble",
      "size": -4,
      "max_tension": 250,
      "snag_factor": 0.77,
      "recognition": 0.65,
      "base_price": 580,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_5_0",
      "name": "TriGrip ST-50 · 礁区三本钩 5/0",
      "hook_type": "treble",
      "size": -5,
      "max_tension": 265,
      "snag_factor": 0.78,
      "recognition": 0.66,
      "base_price": 610,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "marineredge_bg21_giant_5_0",
      "name": "MarinerEdge BG-21 · 巨物钩 5/0",
      "hook_type": "single",
      "size": -5,
      "max_tension": 330,
      "snag_factor": 0.25,
      "recognition": 0.46,
      "base_price": 620,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_6_0",
      "name": "TriGrip ST-60 · 远洋三本钩 6/0",
      "hook_type": "treble",
      "size": -6,
      "max_tension": 280,
      "snag_factor": 0.79,
      "recognition": 0.67,
      "base_price": 640,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "trigrip_double_6_0",
      "name": "TriGrip DH-60 · 远洋双钩 6/0",
      "hook_type": "double",
      "size": -6,
      "max_tension": 310,
      "snag_factor": 0.51,
      "recognition": 0.42,
      "base_price": 680,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_7_0",
      "name": "TriGrip ST-70 · 远洋三本钩 7/0",
      "hook_type": "treble",
      "size": -7,
      "max_tension": 300,
      "snag_factor": 0.8,
      "recognition": 0.68,
      "base_price": 740,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "marineredge_bg25_marlin_7_0",
      "name": "MarinerEdge BG-25 · 枪鱼钩 7/0",
      "hook_type": "single",
      "size": -7,
      "max_tension": 380,
      "snag_factor": 0.27,
      "recognition": 0.48,
      "base_price": 760,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "trigrip_double_8_0",
      "name": "TriGrip DH-80 · 远洋双钩 8/0",
      "hook_type": "double",
      "size": -8,
      "max_tension": 380,
      "snag_factor": 0.53,
      "recognition": 0.45,
      "base_price": 900,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "marineredge_bg29_leviathan_8_0",
      "name": "MarinerEdge BG-29 · 利维坦钩 8/0",
      "hook_type": "single",
      "size": -8,
      "max_tension": 430,
      "snag_factor": 0.29,
      "recognition": 0.5,
      "base_price": 880,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "hooklab_single_sz1_prestige",
      "name": "HookLab HG-11 · 名流竞技单钩 1号",
      "hook_type": "single",
      "size": 1,
      "max_tension": 150,
      "snag_factor": 0.11,
      "recognition": 0.21,
      "base_price": 520,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "marineredge_bg33_pelagic_8_0",
      "name": "MarinerEdge BG-33 · 远洋大物钩 8/0",
      "hook_type": "single",
      "size": -8,
      "max_tension": 480,
      "snag_factor": 0.3,
      "recognition": 0.52,
      "base_price": 1080,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_8_0_hunter",
      "name": "TriGrip ST-80 · 远洋猎手三本钩 8/0",
      "hook_type": "treble",
      "size": -8,
      "max_tension": 320,
      "snag_factor": 0.81,
      "recognition": 0.69,
      "base_price": 980,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "hooklab_single_sz0_imperial",
      "name": "HookLab HG-15 · 帝冠竞技单钩 0号",
      "hook_type": "single",
      "size": 0,
      "max_tension": 170,
      "snag_factor": 0.12,
      "recognition": 0.2,
      "base_price": 760,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "marineredge_bg37_trench_8_0",
      "name": "MarinerEdge BG-37 · 海沟王座钩 8/0",
      "hook_type": "single",
      "size": -8,
      "max_tension": 560,
      "snag_factor": 0.31,
      "recognition": 0.53,
      "base_price": 1380,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "trigrip_stinger_8_0_monarch",
      "name": "TriGrip ST-88 · 王座爆击三本钩 8/0",
      "hook_type": "treble",
      "size": -8,
      "max_tension": 360,
      "snag_factor": 0.82,
      "recognition": 0.7,
      "base_price": 1280,
      "level_required": 50,
      "durability": 100
    }
  ],
  "baits": [
    {
      "id": "earthworm",
      "name": "蚯蚓",
      "bait_type": "worm",
      "size": 2,
      "naturalness": 0.9,
      "color": "red",
      "base_price": 20,
      "sell_price": 0,
      "stack_size": 20
    },
    {
      "id": "corn_kernel",
      "name": "玉米粒",
      "bait_type": "corn",
      "size": 1.5,
      "naturalness": 0.75,
      "color": "yellow",
      "base_price": 30,
      "sell_price": 0,
      "stack_size": 30
    },
    {
      "id": "mealworm",
      "name": "面包虫",
      "bait_type": "insect",
      "size": 1,
      "naturalness": 0.85,
      "color": "brown",
      "base_price": 50,
      "sell_price": 2,
      "stack_size": 20
    },
    {
      "id": "paste_bait_basic",
      "name": "基础饵料团",
      "bait_type": "algae_paste",
      "size": 3,
      "naturalness": 0.65,
      "color": "green",
      "base_price": 70,
      "sell_price": 3,
      "stack_size": 10
    },
    {
      "id": "grass_bundle",
      "name": "嫩草束",
      "bait_type": "grass",
      "size": 3.5,
      "naturalness": 0.82,
      "color": "green",
      "base_price": 70,
      "sell_price": 2,
      "stack_size": 12
    },
    {
      "id": "biobite_bloodworm",
      "name": "红虫",
      "bait_type": "worm",
      "size": 1.2,
      "naturalness": 0.92,
      "color": "red",
      "base_price": 80,
      "sell_price": 3,
      "stack_size": 12
    },
    {
      "id": "shrimp_fresh",
      "name": "鲜虾肉",
      "bait_type": "shrimp",
      "size": 3,
      "naturalness": 0.88,
      "color": "pink",
      "base_price": 200,
      "sell_price": 10,
      "stack_size": 10
    },
    {
      "id": "grainpro_rice_dough",
      "name": "米香面饵",
      "bait_type": "grain",
      "size": 2.4,
      "naturalness": 0.78,
      "color": "white",
      "base_price": 150,
      "sell_price": 7,
      "stack_size": 10
    },
    {
      "id": "match_pellet_sweet",
      "name": "竞技甜颗粒",
      "bait_type": "pellet",
      "size": 2,
      "naturalness": 0.82,
      "color": "amber",
      "base_price": 100,
      "sell_price": 4,
      "stack_size": 12
    },
    {
      "id": "fermented_grain_ball",
      "name": "发酵谷物团",
      "bait_type": "grain",
      "size": 3.2,
      "naturalness": 0.8,
      "color": "yellow",
      "base_price": 150,
      "sell_price": 5,
      "level_required": 7,
      "stack_size": 10
    },
    {
      "id": "snail_meat",
      "name": "螺肉",
      "bait_type": "snail",
      "size": 2.6,
      "naturalness": 0.9,
      "color": "brown",
      "base_price": 220,
      "sell_price": 8,
      "level_required": 7,
      "stack_size": 12
    },
    {
      "id": "match_paste_light",
      "name": "ScentCore ML-12 · 轻比重拉饵",
      "bait_type": "paste",
      "size": 1.8,
      "naturalness": 0.86,
      "color": "beige",
      "base_price": 100,
      "level_required": 7,
      "stack_size": 10
    },
    {
      "id": "small_live_fish",
      "name": "活小鱼",
      "bait_type": "small_fish",
      "size": 4,
      "naturalness": 0.95,
      "color": "silver",
      "base_price": 160,
      "level_required": 14,
      "stack_size": 5
    },
    {
      "id": "crab_chunk",
      "name": "蟹块",
      "bait_type": "crab",
      "size": 3.2,
      "naturalness": 0.88,
      "color": "red",
      "base_price": 220,
      "level_required": 14,
      "stack_size": 8
    },
    {
      "id": "sardine_strip",
      "name": "沙丁鱼条",
      "bait_type": "small_fish",
      "size": 4.6,
      "naturalness": 0.93,
      "color": "silver",
      "base_price": 240,
      "level_required": 14,
      "stack_size": 8
    },
    {
      "id": "clam_meat",
      "name": "贝肉",
      "bait_type": "shellfish",
      "size": 3.8,
      "naturalness": 0.9,
      "color": "ivory",
      "base_price": 280,
      "level_required": 20,
      "stack_size": 10
    },
    {
      "id": "worm_fine_red_04",
      "name": "细红虫",
      "bait_type": "worm",
      "size": 0.4,
      "naturalness": 0.86,
      "color": "red",
      "base_price": 360,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "worm_fine_brown_06",
      "name": "细褐虫",
      "bait_type": "worm",
      "size": 0.6,
      "naturalness": 0.87,
      "color": "brown",
      "base_price": 360,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "worm_small_bundle_09",
      "name": "小虫束",
      "bait_type": "worm",
      "size": 0.9,
      "naturalness": 0.88,
      "color": "red",
      "base_price": 360,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "worm_fresh_cut_15",
      "name": "鲜虫段",
      "bait_type": "worm",
      "size": 1.5,
      "naturalness": 0.89,
      "color": "brown",
      "base_price": 432,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "worm_thick_cut_28",
      "name": "粗虫段",
      "bait_type": "worm",
      "size": 2.8,
      "naturalness": 0.9,
      "color": "brown",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "worm_whole_large_50",
      "name": "整条大蚯",
      "bait_type": "worm",
      "size": 5,
      "naturalness": 0.91,
      "color": "brown",
      "base_price": 504,
      "sell_price": 1,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "insect_small_beetle_18",
      "name": "小甲虫",
      "bait_type": "insect",
      "size": 1.8,
      "naturalness": 0.84,
      "color": "brown",
      "base_price": 432,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "insect_leaf_grub_26",
      "name": "草叶虫",
      "bait_type": "insect",
      "size": 2.6,
      "naturalness": 0.88,
      "color": "olive",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "corn_double_kernel_36",
      "name": "双粒玉米",
      "bait_type": "corn",
      "size": 3.6,
      "naturalness": 0.72,
      "color": "yellow",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "corn_sweet_ball_48",
      "name": "甜玉米团",
      "bait_type": "corn",
      "size": 4.8,
      "naturalness": 0.75,
      "color": "amber",
      "base_price": 504,
      "sell_price": 1,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "corn_old_mash_66",
      "name": "老玉米坨",
      "bait_type": "corn",
      "size": 6.6,
      "naturalness": 0.78,
      "color": "yellow",
      "base_price": 336,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "algae_paste_light_18",
      "name": "轻藻团",
      "bait_type": "algae_paste",
      "size": 1.8,
      "naturalness": 0.64,
      "color": "green",
      "base_price": 432,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "algae_paste_grass_mud_48",
      "name": "水草泥团",
      "bait_type": "algae_paste",
      "size": 4.8,
      "naturalness": 0.66,
      "color": "olive",
      "base_price": 504,
      "sell_price": 1,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "algae_paste_thick_68",
      "name": "厚藻团",
      "bait_type": "algae_paste",
      "size": 6.8,
      "naturalness": 0.68,
      "color": "green",
      "base_price": 336,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "algae_paste_bottom_88",
      "name": "沉底藻坨",
      "bait_type": "algae_paste",
      "size": 8.8,
      "naturalness": 0.7,
      "color": "olive",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "algae_paste_cake_108",
      "name": "大藻饼",
      "bait_type": "algae_paste",
      "size": 10.8,
      "naturalness": 0.72,
      "color": "green",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "paste_plain_ball_32",
      "name": "素面饵团",
      "bait_type": "paste",
      "size": 3.2,
      "naturalness": 0.8,
      "color": "ivory",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "paste_dense_ball_42",
      "name": "浓面饵团",
      "bait_type": "paste",
      "size": 4.2,
      "naturalness": 0.86,
      "color": "beige",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "grass_short_bundle_72",
      "name": "短草把",
      "bait_type": "grass",
      "size": 7.2,
      "naturalness": 0.78,
      "color": "green",
      "base_price": 336,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "grass_long_bundle_88",
      "name": "长草把",
      "bait_type": "grass",
      "size": 8.8,
      "naturalness": 0.82,
      "color": "green",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "shrimp_small_meat_22",
      "name": "小虾仁",
      "bait_type": "shrimp",
      "size": 2.2,
      "naturalness": 0.84,
      "color": "pink",
      "base_price": 432,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "shrimp_white_cut_38",
      "name": "白虾段",
      "bait_type": "shrimp",
      "size": 3.8,
      "naturalness": 0.852,
      "color": "ivory",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "shrimp_whole_meat_50",
      "name": "整虾肉",
      "bait_type": "shrimp",
      "size": 5,
      "naturalness": 0.864,
      "color": "pink",
      "base_price": 504,
      "sell_price": 1,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "shrimp_thick_strip_64",
      "name": "厚虾条",
      "bait_type": "shrimp",
      "size": 6.4,
      "naturalness": 0.876,
      "color": "ivory",
      "base_price": 336,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "shrimp_large_cut_78",
      "name": "大虾段",
      "bait_type": "shrimp",
      "size": 7.8,
      "naturalness": 0.888,
      "color": "pink",
      "base_price": 432,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "shrimp_whole_river_90",
      "name": "整只河虾",
      "bait_type": "shrimp",
      "size": 9,
      "naturalness": 0.9,
      "color": "ivory",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "snail_small_meat_24",
      "name": "小螺肉",
      "bait_type": "snail",
      "size": 2.4,
      "naturalness": 0.86,
      "color": "brown",
      "base_price": 432,
      "sell_price": 0,
      "stack_size": 24,
      "level_required": 0
    },
    {
      "id": "snail_thick_slice_88",
      "name": "厚螺片",
      "bait_type": "snail",
      "size": 8.8,
      "naturalness": 0.88,
      "color": "olive",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "snail_whole_foot_112",
      "name": "整块螺足",
      "bait_type": "snail",
      "size": 11.2,
      "naturalness": 0.9,
      "color": "brown",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "crab_small_claw_58",
      "name": "小蟹钳肉",
      "bait_type": "crab",
      "size": 5.8,
      "naturalness": 0.82,
      "color": "red",
      "base_price": 336,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "crab_thick_chunk_86",
      "name": "厚蟹块",
      "bait_type": "crab",
      "size": 8.6,
      "naturalness": 0.85,
      "color": "brown",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "crab_leg_meat_120",
      "name": "整块蟹腿肉",
      "bait_type": "crab",
      "size": 12,
      "naturalness": 0.88,
      "color": "red",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "shellfish_skirt_145",
      "name": "贝裙边",
      "bait_type": "shellfish",
      "size": 14.5,
      "naturalness": 0.86,
      "color": "ivory",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "shellfish_large_strip_205",
      "name": "大贝带",
      "bait_type": "shellfish",
      "size": 20.5,
      "naturalness": 0.88,
      "color": "pearl",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "shellfish_thick_adductor_270",
      "name": "厚贝柱",
      "bait_type": "shellfish",
      "size": 27,
      "naturalness": 0.9,
      "color": "ivory",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "shellfish_giant_slice_345",
      "name": "整片巨贝肉",
      "bait_type": "shellfish",
      "size": 34.5,
      "naturalness": 0.92,
      "color": "pearl",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "small_fish_fry_cut_32",
      "name": "鱼苗段",
      "bait_type": "small_fish",
      "size": 3.2,
      "naturalness": 0.86,
      "color": "silver",
      "base_price": 396,
      "sell_price": 0,
      "stack_size": 18,
      "level_required": 7
    },
    {
      "id": "small_fish_small_strip_76",
      "name": "小鱼条",
      "bait_type": "small_fish",
      "size": 7.6,
      "naturalness": 0.865,
      "color": "silver",
      "base_price": 432,
      "sell_price": 1,
      "stack_size": 12,
      "level_required": 14
    },
    {
      "id": "small_fish_thin_fillet_88",
      "name": "薄鱼片",
      "bait_type": "small_fish",
      "size": 8.8,
      "naturalness": 0.869,
      "color": "dark_silver",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "small_fish_whole_100",
      "name": "整尾小杂鱼",
      "bait_type": "small_fish",
      "size": 10,
      "naturalness": 0.874,
      "color": "silver",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "small_fish_blue_skin_112",
      "name": "小青皮鱼",
      "bait_type": "small_fish",
      "size": 11.2,
      "naturalness": 0.878,
      "color": "blue_silver",
      "base_price": 288,
      "sell_price": 2,
      "stack_size": 8,
      "level_required": 20
    },
    {
      "id": "small_fish_thick_strip_125",
      "name": "厚鱼条",
      "bait_type": "small_fish",
      "size": 12.5,
      "naturalness": 0.883,
      "color": "dark_silver",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "small_fish_mid_cut_140",
      "name": "中号鱼段",
      "bait_type": "small_fish",
      "size": 14,
      "naturalness": 0.888,
      "color": "silver",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "small_fish_skin_on_155",
      "name": "带皮鱼片",
      "bait_type": "small_fish",
      "size": 15.5,
      "naturalness": 0.892,
      "color": "blue_silver",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "small_fish_whole_bait_170",
      "name": "整条饵鱼",
      "bait_type": "small_fish",
      "size": 17,
      "naturalness": 0.897,
      "color": "dark_silver",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "small_fish_fat_cut_190",
      "name": "肥鱼段",
      "bait_type": "small_fish",
      "size": 19,
      "naturalness": 0.902,
      "color": "silver",
      "base_price": 264,
      "sell_price": 2,
      "stack_size": 6,
      "level_required": 27
    },
    {
      "id": "small_fish_back_chunk_215",
      "name": "厚背鱼块",
      "bait_type": "small_fish",
      "size": 21.5,
      "naturalness": 0.906,
      "color": "blue_silver",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "small_fish_large_chunk_245",
      "name": "大鱼块",
      "bait_type": "small_fish",
      "size": 24.5,
      "naturalness": 0.911,
      "color": "dark_silver",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "small_fish_whole_sea_275",
      "name": "整尾海杂鱼",
      "bait_type": "small_fish",
      "size": 27.5,
      "naturalness": 0.915,
      "color": "silver",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "small_fish_big_whole_310",
      "name": "大整条饵鱼",
      "bait_type": "small_fish",
      "size": 31,
      "naturalness": 0.92,
      "color": "dark_silver",
      "base_price": 200,
      "sell_price": 3,
      "stack_size": 4,
      "level_required": 27
    },
    {
      "id": "scentcore_match_paste_cloud",
      "name": "ScentCore MC-18 · 名流雾化拉饵",
      "bait_type": "paste",
      "size": 2.1,
      "naturalness": 0.9,
      "color": "ivory",
      "base_price": 4200,
      "level_required": 40,
      "stack_size": 10
    },
    {
      "id": "oceanscent_mackerel_strip",
      "name": "OceanScent OS-24 · 鲭鱼条大物饵",
      "bait_type": "small_fish",
      "size": 5.2,
      "naturalness": 0.95,
      "color": "blue_silver",
      "base_price": 3120,
      "level_required": 40,
      "stack_size": 6
    },
    {
      "id": "oceanscent_skipjack_chunk",
      "name": "OceanScent OS-40 · 鲣鱼块旗舰饵",
      "bait_type": "small_fish",
      "size": 6.4,
      "naturalness": 0.96,
      "color": "dark_silver",
      "base_price": 4900,
      "level_required": 50,
      "stack_size": 5
    },
    {
      "id": "oceanscent_giant_clam_ribbon",
      "name": "OceanScent OS-52 · 巨贝珍选饵带",
      "bait_type": "shellfish",
      "size": 5.6,
      "naturalness": 0.94,
      "color": "pearl",
      "base_price": 6720,
      "level_required": 50,
      "stack_size": 6
    }
  ],
  "floats": [
    {
      "id": "pondfloat_pf08",
      "name": "入门浮子 0.8g",
      "float_sensitivity": 0.62,
      "float_detection_threshold_g": 18,
      "base_price": 90,
      "sell_price": 0,
      "durability": 100
    },
    {
      "id": "streamfloat_sf12",
      "name": "StreamFloat SF-12 · 河道细尾漂",
      "float_sensitivity": 0.74,
      "float_detection_threshold_g": 14,
      "base_price": 220,
      "durability": 100
    },
    {
      "id": "marshfloat_mf16",
      "name": "MarshFloat MF-16 · 草湾稳讯漂",
      "float_sensitivity": 0.68,
      "float_detection_threshold_g": 16,
      "base_price": 480,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "reservoirfloat_rf22",
      "name": "ReservoirFloat RF-22 · 水库远投漂",
      "float_sensitivity": 0.58,
      "float_detection_threshold_g": 22,
      "base_price": 1400,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "tourfloat_tf18",
      "name": "TourFloat TF-18 · 巡回赛竞技漂",
      "float_sensitivity": 0.82,
      "float_detection_threshold_g": 12,
      "base_price": 12000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "imperialfloat_if20",
      "name": "ImperialFloat IF-20 · 帝冠旗舰漂",
      "float_sensitivity": 0.9,
      "float_detection_threshold_g": 10,
      "base_price": 52000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "tourfloat_tf20_pro",
      "name": "TourFloat TF-20P · 名流竞技漂",
      "float_sensitivity": 0.86,
      "float_detection_threshold_g": 11,
      "base_price": 28000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "imperialfloat_if24_crown",
      "name": "ImperialFloat IF-24C · 王座珍藏漂",
      "float_sensitivity": 0.94,
      "float_detection_threshold_g": 9,
      "base_price": 98000,
      "level_required": 50,
      "durability": 100
    }
  ],
  "lures": [
    {
      "id": "lead_jig_14g",
      "name": "基础铅头钩 14g",
      "lure_type": "jig",
      "size": 2,
      "weight_g": 14,
      "turbulence": 0.35,
      "reflectivity": 0.5,
      "sound": 0.1,
      "color": "white",
      "base_price": 140,
      "durability": 100
    },
    {
      "id": "metal_spoon_20g",
      "name": "金属亮片 20g",
      "lure_type": "spoon",
      "size": 3,
      "weight_g": 20,
      "turbulence": 0.6,
      "reflectivity": 0.9,
      "sound": 0.2,
      "color": "gold",
      "base_price": 180,
      "durability": 100
    },
    {
      "id": "minnow_7cm_silver",
      "name": "基础米诺 7cm 银色",
      "lure_type": "minnow",
      "size": 3,
      "weight_g": 8,
      "turbulence": 0.5,
      "reflectivity": 0.75,
      "sound": 0.3,
      "color": "silver",
      "base_price": 200,
      "durability": 100
    },
    {
      "id": "micro_spoon_5g",
      "name": "TopWake MS-05 · 微型亮片 5g",
      "lure_type": "spoon",
      "size": 1.8,
      "weight_g": 5,
      "turbulence": 0.42,
      "reflectivity": 0.86,
      "sound": 0.12,
      "color": "silver",
      "base_price": 160,
      "durability": 100
    },
    {
      "id": "swimbait_10cm_bass",
      "name": "BuzzTail BT-11 · 软饵泳姿 10cm",
      "lure_type": "minnow",
      "size": 5,
      "weight_g": 22,
      "turbulence": 0.65,
      "reflectivity": 0.45,
      "sound": 0.25,
      "color": "brown",
      "base_price": 240,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "topwater_frog_65mm",
      "name": "DeepPulse DP-12 · 水面青蛙 65mm",
      "lure_type": "topwater",
      "size": 4,
      "weight_g": 12,
      "turbulence": 0.8,
      "reflectivity": 0.4,
      "sound": 0.6,
      "color": "green",
      "base_price": 260,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "riverpeak_spinner_6g",
      "name": "RiverPeak SP-06 · 旋叶亮片 6g",
      "lure_type": "spoon",
      "size": 2.2,
      "weight_g": 6,
      "turbulence": 0.52,
      "reflectivity": 0.8,
      "sound": 0.14,
      "color": "silver",
      "base_price": 260,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "flashminnow_fm70s",
      "name": "FlashMinnow FM-70S · 沉水米诺",
      "lure_type": "minnow",
      "size": 2.5,
      "weight_g": 7,
      "turbulence": 0.58,
      "reflectivity": 0.72,
      "sound": 0.28,
      "color": "silver",
      "base_price": 360,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "topwake_tw65p",
      "name": "TopWake TW-65P · 水面铅笔",
      "lure_type": "topwater",
      "size": 2.8,
      "weight_g": 9,
      "turbulence": 0.66,
      "reflectivity": 0.48,
      "sound": 0.42,
      "color": "bone",
      "base_price": 420,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "deeppulse_dp18j",
      "name": "DeepPulse DP-18J · 金属铁板",
      "lure_type": "jig",
      "size": 3.2,
      "weight_g": 18,
      "turbulence": 0.72,
      "reflectivity": 0.82,
      "sound": 0.36,
      "color": "blue_silver",
      "base_price": 620,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "deep_crank_12g",
      "name": "DeepPulse DC-12 · 深潜摇滚 12g",
      "lure_type": "crank",
      "size": 3.4,
      "weight_g": 12,
      "turbulence": 0.78,
      "reflectivity": 0.55,
      "sound": 0.65,
      "color": "chartreuse",
      "base_price": 720,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "riverpeak_spinner_10g",
      "name": "RiverPeak SP-10 · 快闪亮片 10g",
      "lure_type": "spoon",
      "size": 3,
      "weight_g": 10,
      "turbulence": 0.58,
      "reflectivity": 0.84,
      "sound": 0.18,
      "color": "silver_chartreuse",
      "base_price": 460,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "flashminnow_fm95f",
      "name": "FlashMinnow FM-95F · 浮水米诺 95mm",
      "lure_type": "minnow",
      "size": 3.8,
      "weight_g": 11,
      "turbulence": 0.62,
      "reflectivity": 0.78,
      "sound": 0.35,
      "color": "ayu",
      "base_price": 1400,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "flashminnow_fm110j",
      "name": "FlashMinnow FM-110J · 快抽米诺 110mm",
      "lure_type": "minnow",
      "size": 4.2,
      "weight_g": 16,
      "turbulence": 0.68,
      "reflectivity": 0.79,
      "sound": 0.38,
      "color": "ayu",
      "base_price": 2600,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "deeppulse_blade_20g",
      "name": "DeepPulse DB-20 · 震动刀片 20g",
      "lure_type": "crank",
      "size": 4,
      "weight_g": 20,
      "turbulence": 0.83,
      "reflectivity": 0.62,
      "sound": 0.56,
      "color": "black_gold",
      "base_price": 3200,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "flashminnow_fm100s",
      "name": "FlashMinnow FM-100S · 稳泳沉水米诺",
      "lure_type": "minnow",
      "size": 4,
      "weight_g": 13,
      "turbulence": 0.66,
      "reflectivity": 0.76,
      "sound": 0.34,
      "color": "smelt",
      "base_price": 1900,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "topwake_tw110p",
      "name": "TopWake TW-110P · 爆裂铅笔 110mm",
      "lure_type": "topwater",
      "size": 4.2,
      "weight_g": 17,
      "turbulence": 0.74,
      "reflectivity": 0.54,
      "sound": 0.58,
      "color": "bone",
      "base_price": 3200,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "riverpeak_shore_jig_40g",
      "name": "RiverPeak SJ-40 · 岸投铁板 40g",
      "lure_type": "jig",
      "size": 5,
      "weight_g": 40,
      "turbulence": 0.86,
      "reflectivity": 0.9,
      "sound": 0.3,
      "color": "blue_pink",
      "base_price": 3600,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "deeppulse_blade_26g",
      "name": "DeepPulse DB-26 · 中层震动刀片 26g",
      "lure_type": "crank",
      "size": 4.5,
      "weight_g": 26,
      "turbulence": 0.85,
      "reflectivity": 0.64,
      "sound": 0.6,
      "color": "black_red",
      "base_price": 3400,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "oceanflare_of36_cast",
      "name": "OceanFlare OF-36 · 岸礁铁板 36g",
      "lure_type": "jig",
      "size": 5.2,
      "weight_g": 36,
      "turbulence": 0.88,
      "reflectivity": 0.89,
      "sound": 0.38,
      "color": "pink_silver",
      "base_price": 4200,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "deeppulse_dp30j",
      "name": "DeepPulse DP-30J · 远投铁板 30g",
      "lure_type": "jig",
      "size": 4.8,
      "weight_g": 30,
      "turbulence": 0.84,
      "reflectivity": 0.88,
      "sound": 0.42,
      "color": "blue_sardine",
      "base_price": 5000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "flashminnow_fm128h",
      "name": "FlashMinnow FM-128H · 大型掠食米诺",
      "lure_type": "minnow",
      "size": 5.2,
      "weight_g": 24,
      "turbulence": 0.76,
      "reflectivity": 0.8,
      "sound": 0.46,
      "color": "blue_silver",
      "base_price": 6000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "topwake_popper_135",
      "name": "TopWake TP-135 · 远投波扒 135mm",
      "lure_type": "topwater",
      "size": 5.4,
      "weight_g": 26,
      "turbulence": 0.88,
      "reflectivity": 0.58,
      "sound": 0.74,
      "color": "pearl",
      "base_price": 5000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "oceanflare_of52_tuna",
      "name": "OceanFlare OF-52 · 金枪鱼铁板 52g",
      "lure_type": "jig",
      "size": 5.8,
      "weight_g": 52,
      "turbulence": 0.92,
      "reflectivity": 0.9,
      "sound": 0.48,
      "color": "pink_silver",
      "base_price": 4000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "topwake_tw160s",
      "name": "TopWake TW-160S · 远洋巨型铅笔",
      "lure_type": "topwater",
      "size": 6,
      "weight_g": 38,
      "turbulence": 0.86,
      "reflectivity": 0.6,
      "sound": 0.72,
      "color": "sardine",
      "base_price": 4500,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "topwake_tw145d",
      "name": "TopWake TW-145D · 远投巡游铅笔 145mm",
      "lure_type": "topwater",
      "size": 5.8,
      "weight_g": 32,
      "turbulence": 0.84,
      "reflectivity": 0.56,
      "sound": 0.7,
      "color": "bone_sardine",
      "base_price": 5600,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "oceanflare_stickbait_170",
      "name": "OceanFlare OS-170 · 蓝水长铅笔",
      "lure_type": "topwater",
      "size": 6.6,
      "weight_g": 48,
      "turbulence": 0.9,
      "reflectivity": 0.64,
      "sound": 0.62,
      "color": "flying_fish",
      "base_price": 6200,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "oceanflare_of88_gt",
      "name": "OceanFlare OF-88 · GT 爆击铁板",
      "lure_type": "jig",
      "size": 7.2,
      "weight_g": 88,
      "turbulence": 0.95,
      "reflectivity": 0.92,
      "sound": 0.54,
      "color": "pink_blue",
      "base_price": 6100,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "oceanflare_of68_amberjack",
      "name": "OceanFlare OF-68 · 琥珀冲击铁板",
      "lure_type": "jig",
      "size": 6.2,
      "weight_g": 68,
      "turbulence": 0.94,
      "reflectivity": 0.91,
      "sound": 0.5,
      "color": "blue_pink",
      "base_price": 6800,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "topwake_tw175r_rocket",
      "name": "TopWake TW-175R · 远洋火箭铅笔",
      "lure_type": "topwater",
      "size": 6.4,
      "weight_g": 42,
      "turbulence": 0.89,
      "reflectivity": 0.61,
      "sound": 0.74,
      "color": "flying_sardine",
      "base_price": 7200,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "flashminnow_fm155o_ocean",
      "name": "FlashMinnow FM-155O · 远洋掠食米诺",
      "lure_type": "minnow",
      "size": 6,
      "weight_g": 32,
      "turbulence": 0.8,
      "reflectivity": 0.84,
      "sound": 0.48,
      "color": "holo_mullet",
      "base_price": 7600,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "oceanflare_of110_trench",
      "name": "OceanFlare OF-110 · 海沟王座铁板",
      "lure_type": "jig",
      "size": 7.8,
      "weight_g": 110,
      "turbulence": 0.97,
      "reflectivity": 0.94,
      "sound": 0.56,
      "color": "purple_silver",
      "base_price": 9800,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "topwake_tw205b_bluewater",
      "name": "TopWake TW-205B · 蓝水王座波袭",
      "lure_type": "topwater",
      "size": 7.5,
      "weight_g": 62,
      "turbulence": 0.92,
      "reflectivity": 0.66,
      "sound": 0.76,
      "color": "skipjack",
      "base_price": 10200,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "flashminnow_fm180c_pelagic",
      "name": "FlashMinnow FM-180C · 远洋王座米诺",
      "lure_type": "minnow",
      "size": 6.8,
      "weight_g": 44,
      "turbulence": 0.82,
      "reflectivity": 0.86,
      "sound": 0.5,
      "color": "flying_fish",
      "base_price": 9600,
      "level_required": 50,
      "durability": 100
    }
  ],
  "leaders": [
    {
      "id": "fluoromax_fl4_leader",
      "name": "FluoroMax FL-4L · 4lb 碳素引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.16,
      "length_m": 1.5,
      "max_tension": 2,
      "visibility": 0.14,
      "base_price": 180,
      "durability": 100
    },
    {
      "id": "fluoromax_match_2lb_leader",
      "name": "FluoroMax ML-2 · 竞技子线 2lb",
      "material": "fluorocarbon",
      "diameter_mm": 0.12,
      "length_m": 1.2,
      "max_tension": 1.6,
      "visibility": 0.1,
      "base_price": 140,
      "durability": 100
    },
    {
      "id": "stealthplus_sp3_leader",
      "name": "StealthPlus SP-3F · 3kg 碳氟引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.14,
      "length_m": 1.5,
      "max_tension": 3,
      "visibility": 0.03,
      "base_price": 220,
      "durability": 100
    },
    {
      "id": "fluoromax_fl10_leader",
      "name": "FluoroMax FL-10L · 10lb 碳素引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.25,
      "length_m": 1.8,
      "max_tension": 4.8,
      "visibility": 0.18,
      "base_price": 360,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "stealthplus_sp5_leader",
      "name": "StealthPlus SP-5F · 5kg 碳氟引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.19,
      "length_m": 1.8,
      "max_tension": 5,
      "visibility": 0.06,
      "base_price": 420,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "braidcore_bc20_shock",
      "name": "BraidCore BC-20S · 20lb PE 远投前导",
      "material": "pe",
      "diameter_mm": 0.28,
      "length_m": 2.2,
      "max_tension": 9,
      "visibility": 0.48,
      "base_price": 410,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "steelguard_sg45_trace",
      "name": "SteelGuard SG-45T · 防咬钢丝前导",
      "material": "steel",
      "diameter_mm": 0.32,
      "length_m": 0.8,
      "max_tension": 12,
      "visibility": 0.82,
      "base_price": 240,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "fluoromax_fl8_leader",
      "name": "FluoroMax FL-8L · 8lb 碳素引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.21,
      "length_m": 1.7,
      "max_tension": 4,
      "visibility": 0.16,
      "base_price": 300,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "stealthplus_sp4_leader",
      "name": "StealthPlus SP-4F · 4kg 碳氟引线",
      "material": "fluorocarbon",
      "diameter_mm": 0.17,
      "length_m": 1.7,
      "max_tension": 4,
      "visibility": 0.04,
      "base_price": 360,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "braidcore_bc16_shock",
      "name": "BraidCore BC-16S · 16lb 轻冲击前导",
      "material": "pe",
      "diameter_mm": 0.24,
      "length_m": 2,
      "max_tension": 7,
      "visibility": 0.45,
      "base_price": 310,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "steelguard_sg60_trace",
      "name": "SteelGuard SG-60T · 重型防咬前导",
      "material": "steel",
      "diameter_mm": 0.42,
      "length_m": 1,
      "max_tension": 16,
      "visibility": 0.86,
      "base_price": 350,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "stealthplus_sp8_leader",
      "name": "StealthPlus SP-8F · 8kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.28,
      "length_m": 2,
      "max_tension": 8,
      "visibility": 0.09,
      "base_price": 860,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluoromax_fl18_leader",
      "name": "FluoroMax FL-18L · 18lb 碳素前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.38,
      "length_m": 2,
      "max_tension": 8.1,
      "visibility": 0.16,
      "base_price": 820,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluoromax_fl14_leader",
      "name": "FluoroMax FL-14L · 14lb 碳素前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.31,
      "length_m": 1.9,
      "max_tension": 6.2,
      "visibility": 0.17,
      "base_price": 700,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "stealthplus_sp6_leader",
      "name": "StealthPlus SP-6F · 6kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.22,
      "length_m": 1.9,
      "max_tension": 6,
      "visibility": 0.07,
      "base_price": 700,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "steelguard_sg52_trace",
      "name": "SteelGuard SG-52T · 咬口钢丝前导",
      "material": "steel",
      "diameter_mm": 0.35,
      "length_m": 0.9,
      "max_tension": 14,
      "visibility": 0.84,
      "base_price": 280,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "fluoromax_fl25_leader",
      "name": "FluoroMax FL-25L · 25lb 岸投前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.42,
      "length_m": 2.4,
      "max_tension": 11,
      "visibility": 0.18,
      "base_price": 980,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "stealthplus_sp12_leader",
      "name": "StealthPlus SP-12F · 12kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.35,
      "length_m": 2.2,
      "max_tension": 12,
      "visibility": 0.13,
      "base_price": 1100,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_bc40_shock",
      "name": "BraidCore BC-40S · 40lb 冲击前导",
      "material": "pe",
      "diameter_mm": 0.36,
      "length_m": 3,
      "max_tension": 16,
      "visibility": 0.46,
      "base_price": 620,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "fluoromax_fl22_leader",
      "name": "FluoroMax FL-22L · 22lb 岸投前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.4,
      "length_m": 2.3,
      "max_tension": 10,
      "visibility": 0.17,
      "base_price": 900,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "stealthplus_sp10_leader",
      "name": "StealthPlus SP-10F · 10kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.31,
      "length_m": 2.1,
      "max_tension": 10,
      "visibility": 0.11,
      "base_price": 980,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "braidcore_bc30_shock",
      "name": "BraidCore BC-30S · 30lb 冲击前导",
      "material": "pe",
      "diameter_mm": 0.32,
      "length_m": 2.8,
      "max_tension": 13,
      "visibility": 0.44,
      "base_price": 540,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "fluoromax_fl28_leader",
      "name": "FluoroMax FL-28L · 28lb 重抛前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.44,
      "length_m": 2.5,
      "max_tension": 12.6,
      "visibility": 0.18,
      "base_price": 1080,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "stealthplus_sp14_leader",
      "name": "StealthPlus SP-14F · 14kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.39,
      "length_m": 2.4,
      "max_tension": 14,
      "visibility": 0.15,
      "base_price": 1240,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "stealthplus_sp15_leader",
      "name": "StealthPlus SP-15F · 15kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.41,
      "length_m": 2.45,
      "max_tension": 15,
      "visibility": 0.16,
      "base_price": 1320,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "braidcore_bc50_shock",
      "name": "BraidCore BC-50S · 50lb 远投前导",
      "material": "pe",
      "diameter_mm": 0.42,
      "length_m": 3.2,
      "max_tension": 20,
      "visibility": 0.45,
      "base_price": 740,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "steelguard_sg72_trace",
      "name": "SteelGuard SG-72T · 近礁钢丝前导",
      "material": "steel",
      "diameter_mm": 0.47,
      "length_m": 1.1,
      "max_tension": 22,
      "visibility": 0.87,
      "base_price": 490,
      "level_required": 27,
      "durability": 100
    },
    {
      "id": "braidcore_bc60_shock",
      "name": "BraidCore BC-60S · 60lb 蓝水冲击前导",
      "material": "pe",
      "diameter_mm": 0.48,
      "length_m": 3.4,
      "max_tension": 24,
      "visibility": 0.47,
      "base_price": 860,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "steelguard_sg90_trace",
      "name": "SteelGuard SG-90T · 深海钢丝前导",
      "material": "steel",
      "diameter_mm": 0.58,
      "length_m": 1.2,
      "max_tension": 35,
      "visibility": 0.9,
      "base_price": 670,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "stealthplus_sp16_leader",
      "name": "StealthPlus SP-16F · 16kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.44,
      "length_m": 2.5,
      "max_tension": 16,
      "visibility": 0.18,
      "base_price": 1400,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "stealthplus_sp17_leader",
      "name": "StealthPlus SP-17F · 17kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.45,
      "length_m": 2.55,
      "max_tension": 17,
      "visibility": 0.18,
      "base_price": 1480,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "fluoromax_fl32_leader",
      "name": "FluoroMax FL-32L · 32lb 大物前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.48,
      "length_m": 2.7,
      "max_tension": 14.5,
      "visibility": 0.19,
      "base_price": 1220,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "stealthplus_sp18_leader",
      "name": "StealthPlus SP-18F · 18kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.46,
      "length_m": 2.6,
      "max_tension": 18,
      "visibility": 0.18,
      "base_price": 1560,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "stealthplus_sp19_leader",
      "name": "StealthPlus SP-19F · 19kg 碳氟前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.48,
      "length_m": 2.65,
      "max_tension": 19,
      "visibility": 0.19,
      "base_price": 1640,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "braidcore_bc70_shock",
      "name": "BraidCore BC-70S · 70lb 蓝水前导",
      "material": "pe",
      "diameter_mm": 0.52,
      "length_m": 3.5,
      "max_tension": 26,
      "visibility": 0.46,
      "base_price": 920,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "fluoromax_fl40_leader",
      "name": "FluoroMax FL-40L · 40lb 强磨前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.54,
      "length_m": 2.8,
      "max_tension": 18,
      "visibility": 0.2,
      "base_price": 1520,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "stealthplus_sp20_leader",
      "name": "StealthPlus SP-20F · 20kg 隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.49,
      "length_m": 2.7,
      "max_tension": 20,
      "visibility": 0.19,
      "base_price": 1720,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "stealthplus_sp21_leader",
      "name": "StealthPlus SP-21F · 21kg 隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.5,
      "length_m": 2.75,
      "max_tension": 21,
      "visibility": 0.19,
      "base_price": 1780,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "stealthplus_sp22_leader",
      "name": "StealthPlus SP-22F · 22kg 隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.52,
      "length_m": 2.8,
      "max_tension": 22,
      "visibility": 0.19,
      "base_price": 1840,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "stealthplus_sp23_leader",
      "name": "StealthPlus SP-23F · 23kg 隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.54,
      "length_m": 2.85,
      "max_tension": 23,
      "visibility": 0.2,
      "base_price": 1920,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "stealthplus_sp25_leader",
      "name": "StealthPlus SP-25F · 25kg 远礁隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.58,
      "length_m": 2.95,
      "max_tension": 25,
      "visibility": 0.21,
      "base_price": 1980,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "braidcore_bc80_shock",
      "name": "BraidCore BC-80S · 80lb 强冲击前导",
      "material": "pe",
      "diameter_mm": 0.56,
      "length_m": 3.7,
      "max_tension": 30,
      "visibility": 0.47,
      "base_price": 980,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "steelguard_sg96_trace",
      "name": "SteelGuard SG-96T · 深湾钢丝前导",
      "material": "steel",
      "diameter_mm": 0.63,
      "length_m": 1.25,
      "max_tension": 38,
      "visibility": 0.9,
      "base_price": 730,
      "level_required": 35,
      "durability": 100
    },
    {
      "id": "steelguard_sg110_trace",
      "name": "SteelGuard SG-110T · 深礁防咬前导",
      "material": "steel",
      "diameter_mm": 0.74,
      "length_m": 1.3,
      "max_tension": 50,
      "visibility": 0.91,
      "base_price": 880,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "steelguard_sg140_trace",
      "name": "SteelGuard SG-140T · 巨型防咬前导",
      "material": "steel",
      "diameter_mm": 0.74,
      "length_m": 1.4,
      "max_tension": 80,
      "visibility": 0.93,
      "base_price": 990,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "stealthplus_sp27_leader",
      "name": "StealthPlus SP-27F · 27kg 深礁隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.62,
      "length_m": 3,
      "max_tension": 27,
      "visibility": 0.22,
      "base_price": 2360,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "braidcore_bc95_shock",
      "name": "BraidCore BC-95S · 95lb 深潮冲击前导",
      "material": "pe",
      "diameter_mm": 0.6,
      "length_m": 3.9,
      "max_tension": 36,
      "visibility": 0.48,
      "base_price": 1680,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "steelguard_sg125_trace",
      "name": "SteelGuard SG-125T · 远洋防咬前导",
      "material": "steel",
      "diameter_mm": 0.82,
      "length_m": 1.35,
      "max_tension": 60,
      "visibility": 0.92,
      "base_price": 1480,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "stealthplus_sp32_leader",
      "name": "StealthPlus SP-35F · 35kg 蓝水隐蔽前导",
      "material": "fluorocarbon",
      "diameter_mm": 0.7,
      "length_m": 3.15,
      "max_tension": 35,
      "visibility": 0.24,
      "base_price": 3380,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "braidcore_bc130_shock",
      "name": "BraidCore BC-130S · 130lb 深渊冲击前导",
      "material": "pe",
      "diameter_mm": 0.74,
      "length_m": 4.1,
      "max_tension": 52,
      "visibility": 0.5,
      "base_price": 2480,
      "level_required": 50,
      "durability": 100
    },
    {
      "id": "steelguard_sg180_trace",
      "name": "SteelGuard SG-180T · 深渊王座防咬前导",
      "material": "steel",
      "diameter_mm": 0.92,
      "length_m": 1.45,
      "max_tension": 100,
      "visibility": 0.94,
      "base_price": 2680,
      "level_required": 50,
      "durability": 100
    }
  ],
  "sinkers": [
    {
      "id": "dropstone_ds10",
      "name": "轻量铅坠 10g",
      "sinker_type": "drop",
      "weight_g": 10,
      "snag_factor": 0.18,
      "stability": 0.55,
      "base_price": 80,
      "durability": 100
    },
    {
      "id": "dropstone_ds18",
      "name": "DropStone DS-18 · 小流速铅坠 18g",
      "sinker_type": "drop",
      "weight_g": 18,
      "snag_factor": 0.2,
      "stability": 0.68,
      "base_price": 120,
      "durability": 100
    },
    {
      "id": "dropstone_ds25",
      "name": "基础铅坠 25g",
      "sinker_type": "drop",
      "weight_g": 25,
      "snag_factor": 0.24,
      "stability": 0.78,
      "base_price": 160,
      "durability": 100
    },
    {
      "id": "dropstone_ds6_match",
      "name": "竞技小铅 6g",
      "sinker_type": "drop",
      "weight_g": 6,
      "snag_factor": 0.12,
      "stability": 0.48,
      "base_price": 70,
      "durability": 100
    },
    {
      "id": "riverhold_rh40",
      "name": "RiverHold RH-40 · 防滚底铅 40g",
      "sinker_type": "grip",
      "weight_g": 40,
      "snag_factor": 0.34,
      "stability": 0.92,
      "base_price": 320,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "dropstone_ds60",
      "name": "DropStone DS-60 · 远投铅坠 60g",
      "sinker_type": "casting",
      "weight_g": 60,
      "snag_factor": 0.28,
      "stability": 0.82,
      "base_price": 620,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "riverhold_rh55",
      "name": "RiverHold RH-55 · 稳流抓底铅 55g",
      "sinker_type": "grip",
      "weight_g": 55,
      "snag_factor": 0.31,
      "stability": 0.9,
      "base_price": 520,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "riverhold_rh80",
      "name": "RiverHold RH-80 · 重型抓底铅 80g",
      "sinker_type": "grip",
      "weight_g": 80,
      "snag_factor": 0.36,
      "stability": 0.95,
      "base_price": 3200,
      "level_required": 14,
      "durability": 100
    },
    {
      "id": "deepanchor_da90",
      "name": "DeepAnchor DA-90 · 深湾锚形铅 90g",
      "sinker_type": "anchor",
      "weight_g": 90,
      "snag_factor": 0.38,
      "stability": 0.96,
      "base_price": 5200,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "deepanchor_da120",
      "name": "DeepAnchor DA-120 · 深水锚形铅 120g",
      "sinker_type": "anchor",
      "weight_g": 120,
      "snag_factor": 0.42,
      "stability": 0.98,
      "base_price": 12000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "deepanchor_da150",
      "name": "DeepAnchor DA-150 · 蓝水锚形铅 150g",
      "sinker_type": "anchor",
      "weight_g": 150,
      "snag_factor": 0.46,
      "stability": 0.99,
      "base_price": 28000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "deepanchor_da180",
      "name": "DeepAnchor DA-180 · 深潮锚形铅 180g",
      "sinker_type": "anchor",
      "weight_g": 180,
      "snag_factor": 0.5,
      "stability": 0.995,
      "base_price": 42000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "deepanchor_da220",
      "name": "DeepAnchor DA-220 · 深渊王座锚铅",
      "sinker_type": "anchor",
      "weight_g": 220,
      "snag_factor": 0.54,
      "stability": 1,
      "base_price": 86000,
      "level_required": 50,
      "durability": 100
    }
  ],
  "tips": [
    {
      "id": "quiverflex_qf15",
      "name": "轻量竿梢",
      "tip_sensitivity": 0.84,
      "tip_detection_threshold_g": 15,
      "test_weight_min_g": 8,
      "test_weight_max_g": 35,
      "base_price": 560,
      "durability": 100
    },
    {
      "id": "quiverflex_qf10m",
      "name": "灵敏竿梢",
      "tip_sensitivity": 0.92,
      "tip_detection_threshold_g": 10,
      "test_weight_min_g": 4,
      "test_weight_max_g": 22,
      "base_price": 620,
      "durability": 100
    },
    {
      "id": "quiverflex_qf25",
      "name": "泛用竿梢",
      "tip_sensitivity": 0.74,
      "tip_detection_threshold_g": 25,
      "test_weight_min_g": 15,
      "test_weight_max_g": 55,
      "base_price": 680,
      "durability": 100
    },
    {
      "id": "quiverflex_qf35h",
      "name": "重铅竿梢",
      "tip_sensitivity": 0.62,
      "tip_detection_threshold_g": 35,
      "test_weight_min_g": 25,
      "test_weight_max_g": 80,
      "base_price": 820,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "quiverflex_qf30r",
      "name": "QuiverFlex QF-30R · 中流竿梢",
      "tip_sensitivity": 0.72,
      "tip_detection_threshold_g": 30,
      "test_weight_min_g": 20,
      "test_weight_max_g": 70,
      "base_price": 980,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "quiverflex_qf18f",
      "name": "QuiverFlex QF-18F · 细咬快反竿梢",
      "tip_sensitivity": 0.88,
      "tip_detection_threshold_g": 18,
      "test_weight_min_g": 10,
      "test_weight_max_g": 40,
      "base_price": 2400,
      "level_required": 7,
      "durability": 100
    },
    {
      "id": "quiverflex_qf45x",
      "name": "QuiverFlex QF-45X · 远投重铅竿梢",
      "tip_sensitivity": 0.68,
      "tip_detection_threshold_g": 45,
      "test_weight_min_g": 35,
      "test_weight_max_g": 110,
      "base_price": 12000,
      "level_required": 20,
      "durability": 100
    },
    {
      "id": "quiverflex_qf52o",
      "name": "QuiverFlex QF-52O · 外海重铅竿梢",
      "tip_sensitivity": 0.64,
      "tip_detection_threshold_g": 52,
      "test_weight_min_g": 40,
      "test_weight_max_g": 130,
      "base_price": 24000,
      "level_required": 32,
      "durability": 100
    },
    {
      "id": "quiverflex_qf60t",
      "name": "QuiverFlex QF-60T · 旗舰深水竿梢",
      "tip_sensitivity": 0.58,
      "tip_detection_threshold_g": 60,
      "test_weight_min_g": 50,
      "test_weight_max_g": 160,
      "base_price": 52000,
      "level_required": 45,
      "durability": 100
    },
    {
      "id": "quiverflex_qf68b",
      "name": "QuiverFlex QF-68B · 深潮桥接竿梢",
      "tip_sensitivity": 0.54,
      "tip_detection_threshold_g": 68,
      "test_weight_min_g": 60,
      "test_weight_max_g": 190,
      "base_price": 72000,
      "level_required": 40,
      "durability": 100
    },
    {
      "id": "quiverflex_qf78a",
      "name": "QuiverFlex QF-78A · 深渊王座竿梢",
      "tip_sensitivity": 0.5,
      "tip_detection_threshold_g": 78,
      "test_weight_min_g": 70,
      "test_weight_max_g": 230,
      "base_price": 128000,
      "level_required": 50,
      "durability": 100
    }
  ],
  "tackle_bundles": [
    {
      "id": "hand_starter_bundle",
      "name": "手竿起步套装",
      "rod_type": "hand_rod",
      "tier": "起步",
      "description": "第 1 天可用，先练浮漂深度与鱼层判断。",
      "items": [
        "bamboo_hand_rod_3m",
        "nylon_line_2lb",
        "single_hook_sz4",
        "earthworm",
        "pondfloat_pf08"
      ],
      "base_price": 0,
      "daily_claim_limit": 1
    },
    {
      "id": "bottom_starter_bundle",
      "name": "底钓起步套装",
      "rod_type": "bottom_rod",
      "tier": "起步",
      "description": "先学沉子与竿梢的配重，不必急着搏大鱼。",
      "items": [
        "fiberglass_bottom_rod_3m6",
        "spinning_reel_2000",
        "nylon_line_4lb",
        "single_hook_sz8",
        "paste_bait_basic",
        "dropstone_ds25",
        "quiverflex_qf15"
      ],
      "base_price": 1409
    },
    {
      "id": "tri_style_rookie_bundle",
      "name": "三钓法入门补给包",
      "rod_type": "multi_style",
      "tier": "钻石",
      "description": "600 钻石一次补齐手竿、路亚、底钓三套入门装备，适合想快速体验全部玩法的玩家。",
      "items": [
        "bamboo_hand_rod_3m",
        "nylon_line_2lb",
        "single_hook_sz4",
        "earthworm",
        "pondfloat_pf08",
        "fiberglass_bottom_rod_3m6",
        "spinning_reel_2000",
        "nylon_line_4lb",
        "single_hook_sz8",
        "paste_bait_basic",
        "dropstone_ds25",
        "quiverflex_qf15",
        "spinning_lure_rod_2m1",
        "spinning_reel_4000",
        "braidcore_pe_10lb",
        "treble_hook_sz2",
        "micro_spoon_5g",
        "fluoromax_fl4_leader"
      ],
      "base_price": 600,
      "currency": "diamonds"
    },
    {
      "id": "hand_river_bundle",
      "name": "手竿河道套装",
      "rod_type": "hand_rod",
      "tier": "第一周",
      "description": "适合芦苇湾、旧城运河和下游缓流。",
      "items": [
        "aqualis_hr540_hand",
        "clearcast_nylon_6lb",
        "hooklab_single_sz6",
        "grainpro_rice_dough",
        "streamfloat_sf12"
      ],
      "base_price": 1954
    },
    {
      "id": "match_starter_bundle",
      "name": "赛竿起步套装",
      "rod_type": "match_rod",
      "tier": "第一周",
      "description": "用浅杯轮和轻线组熟悉连续作钓节奏。",
      "items": [
        "aqualis_mr390_match",
        "spoolworks_sw1500m_match",
        "clearcast_match_3lb",
        "single_hook_match_sz3",
        "match_pellet_sweet",
        "streamfloat_sf12"
      ],
      "base_price": 2371
    },
    {
      "id": "lure_starter_bundle",
      "name": "路亚起步套装",
      "rod_type": "lure_rod",
      "tier": "第一周",
      "description": "从 5g 微亮片和基础米诺开始建立水层感。",
      "items": [
        "spinning_lure_rod_2m1",
        "spoolworks_sw3000s",
        "braidcore_pe_10lb",
        "single_hook_sz8",
        "micro_spoon_5g"
      ],
      "base_price": 2805
    },
    {
      "id": "bottom_channel_bundle",
      "name": "底钓河道套装",
      "rod_type": "bottom_rod",
      "tier": "两周档",
      "description": "稳流铅与更强轮组，适合大坝前和深河道。",
      "items": [
        "tideforge_bottom_rod_480h",
        "spinning_reel_4000",
        "pe_braid_20lb",
        "needlepoint_np_m7",
        "shrimp_fresh",
        "dropstone_ds60",
        "quiverflex_qf35h"
      ],
      "base_price": 6459,
      "level_required": 7
    },
    {
      "id": "hand_marsh_bundle",
      "name": "手竿草区套装",
      "rod_type": "hand_rod",
      "tier": "两周档",
      "description": "湿地与草边守点，容错更高。",
      "items": [
        "aqualis_hr570_river_hand",
        "clearcast_nylon_8lb",
        "single_hook_match_sz5",
        "grass_bundle",
        "marshfloat_mf16"
      ],
      "base_price": 4576,
      "level_required": 7
    },
    {
      "id": "match_tourney_bundle",
      "name": "赛竿进阶套装",
      "rod_type": "match_rod",
      "tier": "两周档",
      "description": "进阶竞技配置，适合长时间扫线。",
      "items": [
        "aqualis_mr450_pro_match",
        "spoolworks_sw2500m_match",
        "clearcast_match_5lb",
        "single_hook_match_sz5",
        "match_paste_light",
        "marshfloat_mf16"
      ],
      "base_price": 5444,
      "level_required": 7
    },
    {
      "id": "lure_stream_bundle",
      "name": "路亚山溪套装",
      "rod_type": "lure_rod",
      "tier": "两周档",
      "description": "河流与峡谷的快搜配置，轻快但不脆。",
      "items": [
        "riverpeak_lure_rod_270m",
        "baitcasting_reel_low_profile",
        "braidcore_pe_25lb",
        "trigrip_treble_sz10",
        "flashminnow_fm95f",
        "steelguard_sg60_trace"
      ],
      "base_price": 8114,
      "level_required": 14
    },
    {
      "id": "match_reservoir_bundle",
      "name": "赛竿远抛套装",
      "rod_type": "match_rod",
      "tier": "月度档",
      "description": "中后期水库与大坝边线的主力方案。",
      "items": [
        "aqualis_mr465_tourney_match",
        "spoolworks_sw5000v_match",
        "fluorocore_fc12_main",
        "needlepoint_np_m7",
        "fermented_grain_ball",
        "reservoirfloat_rf22"
      ],
      "base_price": 16042,
      "level_required": 14
    },
    {
      "id": "lure_shore_bundle",
      "name": "路亚岸投套装",
      "rod_type": "lure_rod",
      "tier": "月度档",
      "description": "专门面向港堤与海湾青物。",
      "items": [
        "riverpeak_lx213ml_stream",
        "marineredge_me6500p",
        "fluorocore_fc20_main",
        "widegap_hook_sz7",
        "flashminnow_fm110j",
        "fluoromax_fl25_leader"
      ],
      "base_price": 25848,
      "level_required": 20
    },
    {
      "id": "hand_reservoir_bundle",
      "name": "手竿水库套装",
      "rod_type": "hand_rod",
      "tier": "月度档",
      "description": "专门应对大物草鱼、鲤鱼和深水边线。",
      "items": [
        "aqualis_hr690_reservoir_hand",
        "clearcast_nylon_12lb",
        "hooklab_circle_sz2",
        "snail_meat",
        "reservoirfloat_rf22"
      ],
      "base_price": 29844,
      "level_required": 20
    },
    {
      "id": "bottom_bay_bundle",
      "name": "底钓海湾套装",
      "rod_type": "bottom_rod",
      "tier": "月度档",
      "description": "开始稳定挑战海湾和防波堤的大鱼。",
      "items": [
        "tideforge_bf600xh_bottom",
        "marineredge_me8000s_surf",
        "braidcore_pe_40lb",
        "hooklab_circle_sz2",
        "sardine_strip",
        "deepanchor_da90",
        "quiverflex_qf45x"
      ],
      "base_price": 62028,
      "level_required": 20
    },
    {
      "id": "match_pro_bundle",
      "name": "赛竿巡回套装",
      "rod_type": "match_rod",
      "tier": "双月档",
      "description": "专门给效率型玩家准备的高频巡场配置。",
      "items": [
        "aqualis_mr480_elite_match",
        "spoolworks_sw3500t_match",
        "fluorocore_fc20_main",
        "hooklab_circle_sz2",
        "crab_chunk",
        "tourfloat_tf18"
      ],
      "base_price": 98717,
      "level_required": 32
    },
    {
      "id": "lure_breaker_bundle",
      "name": "路亚浪口套装",
      "rod_type": "lure_rod",
      "tier": "双月档",
      "description": "中后期海岸线追逐型鱼群的主战套。",
      "items": [
        "riverpeak_lx228mh_lure",
        "marineredge_me850dc_bait",
        "braidcore_pe_55lb",
        "trigrip_stinger_sz1",
        "riverpeak_shore_jig_40g",
        "braidcore_bc60_shock"
      ],
      "base_price": 159840,
      "level_required": 32
    },
    {
      "id": "bottom_offshore_bundle",
      "name": "底钓外海套装",
      "rod_type": "bottom_rod",
      "tier": "双月档",
      "description": "外海浅礁和海带礁的常驻配置。",
      "items": [
        "tideforge_bf630_surf_bottom",
        "marineredge_me9000h_surf",
        "braidcore_pe_80lb",
        "trigrip_stinger_sz1",
        "crab_chunk",
        "deepanchor_da120",
        "quiverflex_qf52o"
      ],
      "base_price": 203778,
      "level_required": 32
    },
    {
      "id": "hand_master_bundle",
      "name": "手竿宗师套装",
      "rod_type": "hand_rod",
      "tier": "终盘",
      "description": "给仍坚持手竿线的后期玩家准备的终盘解。",
      "items": [
        "aqualis_hr810_legend_hand",
        "braidcore_pe_80lb",
        "marineredge_bg11_biggame",
        "small_live_fish",
        "imperialfloat_if20"
      ],
      "base_price": 299124,
      "level_required": 45
    },
    {
      "id": "match_imperial_bundle",
      "name": "赛竿帝冠套装",
      "rod_type": "match_rod",
      "tier": "终盘",
      "description": "为最终长线运营阶段准备的顶配赛竿。",
      "items": [
        "aqualis_mr540_imperial_match",
        "spoolworks_sw3500t_match",
        "braidcore_pe_90lb",
        "marineredge_bg11_biggame",
        "clam_meat",
        "imperialfloat_if20"
      ],
      "base_price": 295094,
      "level_required": 45
    },
    {
      "id": "lure_bluewater_bundle",
      "name": "路亚蓝水套装",
      "rod_type": "lure_rod",
      "tier": "终盘",
      "description": "针对海山边缘巡游鱼的大型路亚终盘配置。",
      "items": [
        "riverpeak_lx279o_tidebreaker",
        "abyssalcrown_ac18000_ocean",
        "braidcore_pe_120lb",
        "marineredge_bg11_biggame",
        "oceanflare_stickbait_170",
        "steelguard_sg110_trace"
      ],
      "base_price": 819000,
      "level_required": 45
    },
    {
      "id": "bottom_leviathan_bundle",
      "name": "底钓深蓝套装",
      "rod_type": "bottom_rod",
      "tier": "终盘",
      "description": "专攻海山边缘与超强流大物的最终底钓方案。",
      "items": [
        "tideforge_bf720_leviathan_bottom",
        "abyssalcrown_ac12000",
        "braidcore_pe_120lb",
        "marineredge_bg15_titan",
        "clam_meat",
        "deepanchor_da150",
        "quiverflex_qf60t"
      ],
      "base_price": 1973412,
      "level_required": 45
    }
  ]
};
