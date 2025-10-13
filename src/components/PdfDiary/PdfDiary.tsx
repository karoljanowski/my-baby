import { Diary, DiaryEntryFile } from "../../../generated/prisma";
import { Document, Page, Text, Image, StyleSheet, Font, View } from "@react-pdf/renderer";
import React from "react";
import { EntryWithQuestionTitle } from "@/lib/types";

Font.register({
    family: "Roboto",
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const styles = StyleSheet.create({
    page: {
        fontFamily: "Roboto",
        backgroundColor: "#F8F3E7",
    },
    coverPage: {
      backgroundColor: '#F8F3E7',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    coverTitle: {
      fontFamily: "Roboto",
      fontSize: 52,
      color: '#C47F5E',
      textAlign: 'center',
      marginBottom: 20,
    },
    coverSubtitle: {
      fontFamily: "Roboto",
      fontSize: 32,
      color: '#262626',
      textAlign: 'center',
    },
    decorationTopLeft: {
      position: 'absolute',
      top: -20,
      left: -100,
      width: 333,
      height: 319,
    },
    decorationTopRight: {
      position: 'absolute',
      top: -20,
      right: -37,
      width: 187,
      height: 186,
    },
    decorationBottomRight: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 181,
      height: 241,
    },
    categoryPage: {
      backgroundColor: '#F8F3E7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryTitle: {
      fontFamily: "Roboto",
      fontSize: 24,
      color: '#C47F5E',
      textAlign: 'center',
      marginBottom: 20,
    },
    chapterNumber: {
      fontFamily: "Roboto",
      fontSize: 24,
      color: '#262626',
      textAlign: 'center',
    },
    categoryIcon: {
      width: 100,
      height: 140,
      objectFit: 'contain',
    },
    questionPage: {
      backgroundColor: '#F8F3E7',
      padding: 20,
    },
    chapterInfo: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: '#C47F5E',
    },
    questionTitle: {
      fontFamily: "Roboto",
      fontSize: 18,
      color: '#262626',
      marginBottom: 10,
    },
    answerText: {
      fontFamily: "Roboto",
      fontSize: 16,
      color: '#262626',
      marginBottom: 20,
    },
    imagesGrid: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    imageContainer: {
      width: 200,
      height: 200,
      borderRadius: 10,
      overflow: 'hidden',
      border: '1px solid #C47F5E',
    },
    image: {
      width: 200,
      height: 200,
      objectFit: 'cover',
    },
});

type PdfDiaryProps = {
  diary: Diary;
  decorations: { flower1: string, flower2: string, flower3: string };
  categories: { chapterNumber: number, categoryTitle: string, categoryIcon: string, questions: EntryWithQuestionTitle[] }[];
}

const PdfDiary = ({ diary, decorations, categories }: PdfDiaryProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.coverPage}>
        <Image src={decorations.flower3} style={styles.decorationTopLeft} />
        <Image src={decorations.flower1} style={styles.decorationTopRight} />
        <Image src={decorations.flower2} style={styles.decorationBottomRight} />
        
        <Text style={styles.coverTitle}>{diary.name}</Text>
        <Text style={styles.coverSubtitle}>Dziennik wspomnień</Text>
      </Page>
      {categories.map((category) => (
        <React.Fragment key={`cat-${category.chapterNumber}`}>
          <Page size="A4" style={styles.categoryPage}>
            {decorations.flower3 && <Image src={decorations.flower3} style={styles.decorationTopLeft} />}
            {decorations.flower1 && <Image src={decorations.flower1} style={styles.decorationTopRight} />}
            {decorations.flower2 && <Image src={decorations.flower2} style={styles.decorationBottomRight} />}
            
            <Text style={styles.chapterNumber}>Rozdział {category.chapterNumber}</Text>
            <Text style={styles.categoryTitle}>{category.categoryTitle}</Text>
            {category.categoryIcon && <Image src={category.categoryIcon} style={styles.categoryIcon} />}
          </Page>

          {category.questions.map((entry: EntryWithQuestionTitle) => (
            <Page key={entry.id} size="A4" style={styles.questionPage}>
              <Text style={styles.chapterInfo}>
                Rozdział {category.chapterNumber} {category.categoryTitle}
              </Text>
              <Text style={styles.questionTitle}>{entry.question_title}</Text>
              {entry.text && <Text style={styles.answerText}>{entry.text}</Text>}
              
              {entry.files && entry.files.length > 0 && (
                <View style={styles.imagesGrid}>
                  {entry.files.map((file: DiaryEntryFile, fIndex: number) => (
                    <View key={fIndex} style={styles.imageContainer}>
                      <Image src={file.url} style={styles.image} />
                    </View>
                  ))}
                </View>
              )}
            </Page>
          ))}
        </React.Fragment>
      ))}
    </Document>
  );
}


export default PdfDiary;